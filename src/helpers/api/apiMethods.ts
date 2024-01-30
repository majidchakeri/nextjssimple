import axios from "axios";

import { GetCookie } from "../manageCookie";
import { LoginForm } from "@/utils/types/loginTypes";
import { ENV } from "@/utils/const/main";

const api = axios.create({
  baseURL: `${ENV.basePath}${process.env.REACT_APP_API_URL}`,
  headers: { accept: "application/json" },
});

api.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${GetCookie("token")}`;
  console.log("header is ====", config.headers);

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = async (url: string, params = {}) => {
  return await api.get(url, {
    params,
  });
};

const post = async (url: string, params = {}) => {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  console.log("process.env.REACT_APP_DEV_URL", process.env.REACT_APP_DEV_URL);
  console.log("url is url ", url);

  // process.env.NODE_ENV;
  return await api.post(url);
};

const put = async (url: string, params = {}) => {
  return await api.put(url, params);
};

const del = async (url: string, params = {}) => {
  return await api.delete(url, params);
};

// const formData = async(url: string, params = {}, progress: (percentage: number) => void
const formData = async (
  url: string,
  params = {},
  progress: (percentage: number) => void
) => {
  return await api.post(url, params, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (e) => {
      if (e.total && progress) {
        progress(Math.floor((e.loaded / e.total) * 100));
      }
    },
  });
};

export default {
  auth: {
    login: async (params: LoginForm) => {
      const response = await post("/auth/login", params);
      return response.data;
    },
  },
};
