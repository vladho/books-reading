import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:8080';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const formatError = ({ name, message, response }) => ({
  name,
  message,
  status: response?.status,
  respMsg: response?.data?.message,
});

const register = async credentials =>
  (await axios.post('/api/users/signup', credentials)).data;

const login = async credentials =>
  (await axios.post('/api/users/login', credentials)).data;

const logOut = async credentials =>
  (await axios.post('/api/users/logout', credentials)).data;

const refresh = async sid => (await axios.post('/auth/refresh', { sid })).data;

const api = {
  register,
  login,
  logOut,
  refresh,
  formatError,
  setToken,
  unsetToken,
};

export default api;
