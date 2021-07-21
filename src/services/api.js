import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const formatError = ({ name, message, response }) => ({
  name,
  message,
  status: response?.status,
});

//Логинизация и Регистрация
const register = async credentials =>
  (await axios.post('/auth/register', credentials)).data.data;

const login = async credentials =>
  (await axios.post('/auth/login', credentials)).data.data;

const logOut = async credentials =>
  (await axios.post('/auth/logout', credentials)).data.data;

const refresh = async sid => (await axios.post('/refresh', { sid })).data.data;

// 📌 Книги

const getAllBooks = async () => (await axios.get('/books')).data;

const postOneBook = async () => (await axios.post('/books'), {}).data;

const deleteOneBook = async () => await axios.delete(`/books/:{id}`);

// 📌 Тренировки

const getCurrTraining = async () => (await axios.get('/training')).data;

const api = {
  unsetToken,
  setToken,
  formatError,

  register,
  login,
  logOut,
  refresh,

  getAllBooks,
  getCurrTraining,
  postOneBook,
  deleteOneBook,
};
export default api;
