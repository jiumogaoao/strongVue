import { testUrl } from "@shared/api";
import {getFetch} from "../util/request.js";

export let getFetchTest = async () => {
  const res = await getFetch(testUrl);
  return res;
};
