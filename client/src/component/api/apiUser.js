import axios from "../config/endpoint";

const findall = () => {
  return axios.get("/users");
};

const create = async (data) => {
  return await axios.post("/users/register", data);
};

const login = (data) => {
  return axios.post("/users/login", data);
};

export default {
  findall,
  create,
  login,
};
