import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});
export const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1",
});
