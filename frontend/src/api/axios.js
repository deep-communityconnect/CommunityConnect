import axios from "axios";
import BASE_URL from "../config/config";

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/`,
});

// Attach JWT access token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;