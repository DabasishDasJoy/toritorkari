import { useEffect, useState } from "react";
import axios from "../../AxiosInstance/AxiosInstance";

const useGetToken = (email) => {
  const [token, setToken] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (email) {
      setFetching(true);

      // Abort controler
      const abortController = new AbortController();

      (async function fetchToken() {
        try {
          axios
            .get(`/jwt?email=${email}`, {
              signal: abortController.signal,
            })
            .then((res) => {
              if (res.data.token) {
                localStorage.setItem("token", res.data.token);
                setToken(res.data.token);
              }
              setFetching(false);
            })
            .catch((err) => console.error(err));
        } catch (error) {
          console.error(error);
        }
      })();

      return () => {
        abortController.abort();
      };
    }
  }, [email]);

  return [token];
};

export default useGetToken;
