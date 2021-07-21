import { api } from '../../services';
import axios from 'axios';
import booksActions from './booksActions';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  addBookRequest,
  addBookSuccess,
  addBookError,
  removeBookRequest,
  removeBookSuccess,
  removeBookError,
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

const addBook = book => async dispatch => {
  dispatch(addBookRequest());
  try {
    axios.post('http://localhost:8080/api/books', book).then(response => {
      dispatch(addBookSuccess(response.data));
    });
  } catch (error) {
    dispatch(addBookError(api.formatError(error)));
  }
};

const removeBook = id => async dispatch => {
  dispatch(removeBookRequest());
  console.log('operations id:', id);
  try {
    axios
      .delete(`http://localhost:8080/api/books/${id}`)
      .then(() => dispatch(removeBookSuccess(id)));
  } catch (error) {
    dispatch(removeBookError(api.formatError(error)));
  }
};

const booksOperations = {
  fetchBooks,
  addBook,
  removeBook,
};

export default booksOperations;
