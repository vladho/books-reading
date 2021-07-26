import axios from 'axios';

https: axios.defaults.baseURL =
  'https://books-reading-backend.herokuapp.com/api';
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

const loginGoogle = async () => await axios.get('/auth/google');

const logOut = async credentials =>
  (await axios.post('/auth/logout', credentials)).data.data;

const refresh = async sid => (await axios.post('/refresh', { sid })).data.data;

// 📌 Книги

const getAllBooks = async () => (await axios.get('/books')).data;

// const postOneBook = async data => (await axios.post('/books'), data).data;

// const deleteOneBook = async () => await axios.delete(`/books/:{id}`);

// 📌 Тренировки

const getCurrTraining = async () => (await axios.get('/training')).data;

const startTraining = async details =>
  (await axios.post('/training', details)).data;

const addResult = async body => (await axios.patch('/training', body)).data;

const api = {
  unsetToken,
  setToken,
  formatError,

  register,
  login,
  loginGoogle,
  logOut,
  refresh,

  getAllBooks,
  getCurrTraining,
  startTraining,
  // postOneBook,
  // deleteOneBook,

  addResult,
};
export default api;
