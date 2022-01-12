import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

export const apiNoticia = axios.create({
  baseURL: "/api",
  headers: {
    "accept-language": "pt-br",
    "x-bingapis-sdk": "true",
    "x-search-location": "br",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "e9970d4199msh61cd785b8750db9p1d9d1djsnca008e95cb75",
  },
});
