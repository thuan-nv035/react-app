import { Axios } from "./Axios";

function getCategory() {
    return Axios.get('categories/get?id_website=4');
}

export const authServices = {
    getCategory,
};