import axios from "axios";

const instance = axios.create({
   baseURL: process.env.REACT_APP_URL_API,
   timeout: 3000000
})
instance.interceptors.response.use(
    (response) => {
        return response.data ? response.data : {statusCode : response.status};
    },
    (error) =>{
        console.log(error);
    }
);
export default instance;