import axios from "axios";

const api = axios.create({
  baseUrl: "https://h-app-api.herokuapp.com/",
});

export default api;
