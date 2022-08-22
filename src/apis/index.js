import axios from "axios";

const targetServer = "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/"

export const instance = axios.create ({
  baseURL: targetServer,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
});