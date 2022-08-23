import axios from "axios";

const serverUrl = "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/"

const instance = axios.create ({
  baseURL: serverUrl,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

const requiredInstance = axios.create({
  baseURL: serverUrl,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

requiredInstance.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("JWT");
  config.headers.common["Authorization"] = `Bearer ${access_token}`;
  
  return config;
});

export default instance;
