import { useEffect, useState } from "react";
import axios from "../../AxiosInstance/AxiosInstance";

const useGetToken = (email) => {
  const [token, setToken] = useState(null);
  console.log("Hook hit", email);

  useEffect(() => {
    if (email) {
      axios
        .get(`/jwt?email=${email}`)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [email]);
  console.log("Email: ", email);
  return [token];
};

export default useGetToken;