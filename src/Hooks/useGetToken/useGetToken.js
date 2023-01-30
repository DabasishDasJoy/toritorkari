import { useEffect, useState } from "react";
import axios from "../../AxiosInstance/AxiosInstance";

const useGetToken = (email) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (email) {
      try {
        axios
          .get(`/jwt?email=${email}`)
          .then((res) => {
            if (res.data.token && isMounted) {
              localStorage.setItem("token", res.data.token);
              setToken(res.data.token);
            }
          })
          .catch((err) => console.error(err));
      } catch (error) {
        console.error(error);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [email]);

  return [token];
};

export default useGetToken;
