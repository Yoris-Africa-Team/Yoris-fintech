import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://54.160.174.199:3106/api/v1", // Backend Base URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
