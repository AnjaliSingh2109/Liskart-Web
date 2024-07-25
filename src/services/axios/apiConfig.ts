import { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import CryptoJS from "crypto-js";

let store: { getState: () => any; dispatch: (callback: any) => null };

export const injectStore = (_store: any) => {
    store = _store;
};

export const onRequestSuccess = (config: InternalAxiosRequestConfig<any>) => {
    const configuration = config;

    let token = "";
    if (configuration.url !== "/admin/token") token = store?.getState()?.authDetails?.accessToken;

    if (token)
        configuration.headers.Authorization = `Bearer ${CryptoJS.AES.decrypt(token, String(process.env.APP_SECRET)).toString(CryptoJS.enc.Utf8)}`;
    configuration.headers["x-api-key"] = process.env.APP_XApiKey;
    return configuration;
};

export const onRequestError = (error: any) => Promise.reject(error?.response);
export const onResponseSuccess = (response: AxiosResponse<any, any>) => response;

export const onResponseError = async (error: any) => {
    if (error.response) {
        console.log("error", error);
        if (error.response.status === 401) {
            // handle unauthorized error
        }
        if (error.response.status === 403) {
            // handle forbidden error or call logout
        }
        return Promise.reject(error.response);
    }
    return Promise.reject({
        data: {
            message: "Looks like the server is taking to long to respond, please try again in sometime.",
        },
    });
};
