import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e47d4b2ef6b49c08a5aa09936d59730",
  },
});

export default apiClient;
