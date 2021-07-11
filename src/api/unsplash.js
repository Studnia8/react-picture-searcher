import axios from "axios";
import keys from "../config/keys";

// create instance of axios client
const axiosConf = axios.create({
  headers: {
    Authorization: `Client-ID ${keys.unsplashAccessKey}`,
  },
  baseURL: "https://api.unsplash.com",
});

export default axiosConf;
