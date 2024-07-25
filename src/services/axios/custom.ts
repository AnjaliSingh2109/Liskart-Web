import axios from "axios";

import { onRequestError, onRequestSuccess, onResponseError, onResponseSuccess } from "./apiConfig";

const TIMEOUT = 1 * 60 * 1000;
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: TIMEOUT,
});

instance.interceptors.request.use(onRequestSuccess, onRequestError);
instance.interceptors.response.use(onResponseSuccess, onResponseError);

export default instance;
