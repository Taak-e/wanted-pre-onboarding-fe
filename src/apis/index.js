import axios from "axios";

const instance = axios.create ({
  baseURL: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/",
});

instance.interceptors.request.use(function (config) {

  config.headers["Content-Type"] =
    "application/json";
  
  return config;
});

export default instance;
