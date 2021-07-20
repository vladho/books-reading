import axios from 'axios';
import { api } from '../../services';
import booksActions from './booksActions';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  addBooksRequest,
  addBooksSuccess,
  addBooksError,
} = booksActions;

const fetchBooks = () => async dispatch => {
  dispatch(fetchBooksRequest());

  try {
    const data = await api.getAllBooks();

    dispatch(fetchBooksSuccess(data));
  } catch (error) {
    dispatch(fetchBooksError(api.formatError(error)));
  }
};

const addBooks = book => async dispatch => {
  dispatch(addBooksRequest());
  console.log('addBook:', book);
  axios
    .post('http://localhost:8080/api/books', { book })
    .then(response => {
      console.log('response addBook:', response);
      dispatch(addBooksSuccess(response.data));
    })
    .catch(error => dispatch(addBooksError(api.formatError(error))));
};

const booksOperations = {
  fetchBooks,
  addBooks,
};
export default booksOperations;
