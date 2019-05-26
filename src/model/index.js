import {getFetch} from "../util/request.js";

export let getFetchTest = async () => {
  const res = await getFetch("/fxapi/services/system/ctmall/homepage@getAllCitys.japi");
  console.log(res);
  return res;
};
