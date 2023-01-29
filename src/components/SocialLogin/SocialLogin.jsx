import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../AxiosInstance/AxiosInstance";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useGetToken from "../../Hooks/useGetToken/useGetToken";

const SocialLogin = ({ loginModal }) => {
  const { googleSignIn, facebookSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [token] = useGetToken(email);
  const from = location.state?.from?.pathname || location;

  const createData = (res) => {
    const data = {
      userName: res?.user?.displayName,
      email: res?.user?.email,
    };
    saveUserToDb(data);
  };

  const handleGoogleLogin = () => {
    setEmail("");
    googleSignIn()
      .then((res) => {
        // Token Generation
        createData(res);
      })
      .catch((err) => {
        console.error(err);
        return toast.error(err.message);
      });
  };

  const handleFacebookSignIn = () => {
    setEmail("");
    facebookSignIn()
      .then((res) => {
        // token Generation
        createData(res);
      })
      .catch((err) => {
        console.error(err);
        return toast.error(err.message);
      });
  };

  const saveUserToDb = (data) => {
    axios
      .post("/users", {
        name: data.userName,
        email: data.email,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          // Get JWT token here
          setEmail(data.email);
          succeAndRedirect(data);
        } else {
        }
      })
      .catch((err) => {
        console.error(err);
        return toast.error(err.message);
      });
  };

  const succeAndRedirect = (data) => {
    toast.success(`Welcome ${data.userName}`);
    loginModal.current.checked = false;
    navigate(from, { replace: true });
  };

  return (
    <div className="flex justify-center cursor-pointer items-center gap-5">
      <svg
        onClick={handleFacebookSignIn}
        width="30px"
        height="30px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          fill="#1877F2"
          d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
        />
        <path
          fill="#ffffff"
          d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
        />
      </svg>

      <svg
        onClick={handleGoogleLogin}
        width="30px"
        height="30px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
          fill="#4285F4"
        />
        <path
          d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
          fill="#34A853"
        />
        <path
          d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
          fill="#FBBC05"
        />
        <path
          d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
          fill="#EB4335"
        />
      </svg>
    </div>
  );
};

export default SocialLogin;
