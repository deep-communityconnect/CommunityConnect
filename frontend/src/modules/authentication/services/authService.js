import axiosInstance from "../../../api/axios";

export const loginUser = (data) => {
  return axiosInstance.post("auth/login/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const registerUser = (data) => {
  return axiosInstance.post("auth/register/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const logoutUser = () => {
  return axiosInstance.post("auth/logout/");
};