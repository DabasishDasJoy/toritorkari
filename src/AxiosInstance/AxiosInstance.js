import axios from "axios";

const defaultOptions = {
  baseURL: process.env.REACT_APP_API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
const instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
