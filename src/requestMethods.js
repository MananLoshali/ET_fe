import axios from "axios";

const BASE_URL = "http://localhost:3500/api/v1";

export const request = axios.create({
  baseURL: BASE_URL,
});
