import { Axios } from "./Axios";

function getArticles(payload) {
    return Axios.get(`?q=${payload}&from=2022-03-13&sortBy=publishedAt&apiKey=358a0f2f34bd446987cf461bc88e0176&from=2022-03-20&sortBy=publishedAt&apiKey=bc533a50ce714156896a51f020d3988c`);
}

export const homeService = {
    getArticles
};