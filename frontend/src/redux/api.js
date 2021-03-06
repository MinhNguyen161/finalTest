import axios from "axios";
import { message } from "antd";

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API,
    headers: {
        "Content-Type": "application/json",
    },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
    (request) => {
        console.log("Starting Request", request);
        console.log("link", process.env.REACT_APP_BACKEND_API);
        return request;
    },
    function (error) {
        console.log("REQUEST ERROR", error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log("Response:", response);
        if (response.data.data && response.data.data.accessToken) {
            api.defaults.headers.common["authorization"] =
                "Bearer " + response.data.data.accessToken;
        }
        return response;
    },
    function (error) {
        error = error.response.data;
        console.log("RESPONSE ERROR", error);
        let errorMsg = error.message || "";
        if (error.errors && error.errors.message)
            errorMsg = errorMsg + ": " + error.errors.message;
        message.error(errorMsg);
        return Promise.reject(error);
    }
);

export default api;
