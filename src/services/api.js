import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const formatError = ({ name, message, response }) => ({
  name,
  message,
  status: response?.status,
});

// 📌 Книги

const getAllBooks = async () => (await axios.get('/books')).data;

const postOneBook = async () => (await axios.post('/books'), {}).data;

// 📌 Тренировки

const getCurrTraining = async () => (await axios.get('/training')).data;

const api = {
  formatError,
  getAllBooks,
  getCurrTraining,
  postOneBook,
};
export default api;
