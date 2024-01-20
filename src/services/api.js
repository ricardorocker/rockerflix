import axios from "axios";

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=6666729db4256cc76fad9e033bcf89ab&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
