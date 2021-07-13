import axios from "axios";

const register = async (credentials) =>
  (await axios.post("/auth/register", credentials)).data;

const login = async (credentials) =>
  (await axios.post("/auth/login", credentials)).data;

const logOut = async (credentials) =>
  (await axios.post("/auth/logout", credentials)).data;

const refresh = async (sid) =>
  (await axios.post("/auth/refresh", { sid })).data;

const api = {
  register,
  login,
  logOut,
  refresh,
};

export default api;
