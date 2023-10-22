import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3600",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
