import axios from "axios";
let config= require("../../build/config.js");
axios.defaults.baseURL = config.API;
axios.defaults.timeout = 120000;

export const getFetch = async (url,params = {}) => {
  try{
    const res = await axios.get(url,params);
    return res;
  }catch(e){
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
};

export const postFetch = async (url,params = {}) => {
  try{
    const res = await axios.post(url,params);
    return res;
  }catch(e){
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
};
