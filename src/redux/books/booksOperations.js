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
  console.log('addBook require body:', book);
  // try {
  //   const data = await api.postOneBook({ book });
  //   console.log('addBook response:', data);
  //   dispatch(addBookSuccess(data));
  // } catch (error) {
  //   dispatch(addBookError(api.formatError(error)));
  // }

  axios
    .post('http://localhost:8080/api/books', book)
    .then(response => {
      console.log('response addBook:', response.data);
      dispatch(addBookSuccess(response.data));
    })
    .catch(error => dispatch(addBookError(api.formatError(error))));
};

const removeBook = id => async dispatch => {
  dispatch(removeBookRequest());
  try {
    const data = await api.deleteOneBook(id);
    dispatch(removeBookSuccess(data));
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

// axios.delete(`http://localhost:8080/api/books/:{id}`)
//   .then(() => dispatch(fetchBooksSuccess())})
//   .catch(error => dispatch(fetchBooksError(api.formatError(error))));
