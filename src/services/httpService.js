import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

//axios.defaults.headers.common["x-auth-token"] = auth.getJwt(); // bi directional dependency


axios.interceptors.response.use(null, (error) => {
  const exError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!exError) {
    logger.log(error);
    toast("An unexpected error occurred");
  }
  return Promise.reject(error);
});


function setJwt(jwt){
  axios.defaults.headers.common["x-auth-token"] = jwt
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
