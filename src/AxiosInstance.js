import axios from "axios";
import authProvider from "api/authentication/auth-provider";


const axiosinstance = axios.create({});
axiosinstance.defaults.headers.common['Authorization'] = sessionStorage.getItem("msal.idtoken");


axiosinstance.defaults.baseURL = ""; // can specify base url here, leaving empty because some requests are still using fetch 
const account = null;
axiosinstance.interceptors.request.use((request) => {
    console.log(sessionStorage.getItem("msal.idtoken"));
    return request;
});

export default axiosinstance;