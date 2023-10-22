import axios from "../config/endpoint";

const findall = () => {
  return axios.get("/news");
};

const create = (data) => {
  return axios.post("/news", data);
};

export default {
  findall,
  create,
};
