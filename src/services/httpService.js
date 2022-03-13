import axios from "axios";
import logger from "./logService";
import {toast} from 'react-toastify'

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

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
