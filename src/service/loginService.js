import { Axios } from "./Axios";

function Login(payload) {
    return Axios.post('login',payload);
}

export const homeService = {
    Login,
};