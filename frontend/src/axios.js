import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost/api/",
  timeout: 5000,
  headers: { Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN }
});

export default customAxios;
