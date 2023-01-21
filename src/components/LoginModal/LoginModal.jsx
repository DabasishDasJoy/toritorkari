import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const LoginModal = ({ loginOrRegister, setLoginOrRegister }) => {
  const { loginModal } = useContext(AuthContext);

  return (
    <div className="">
      <input
        ref={loginModal}
        name="loginModal"
        type="checkbox"
        id="login-modal"
        className="modal-toggle"
      />

      <div className="modal bg-black/80">
        <div className="modal-box lg:w-6/12 w-11/12 max-w-5xl p-0 relative rounded-sm grid lg:grid-cols-6 grid-cols-1">
          <label
            htmlFor="login-modal"
            className="absolute right-2 text-black hover:text-primary cursor-pointer font-semibold top-1"
          >
            ✕
          </label>
          {loginOrRegister === "login" ? (
            <Login setLoginOrRegister={setLoginOrRegister}></Login>
          ) : (
            <Register setLoginOrRegister={setLoginOrRegister}></Register>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
