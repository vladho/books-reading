import { api } from '../../services';
import booksActions from './booksActions';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  addBookRequest,
  addBookSuccess,
  addBookError,
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
  try {
    const data = await api.postOneBook({ book });
    dispatch(addBookSuccess(data));
  } catch (error) {
    dispatch(addBookError(api.formatError(error)));
  }
};

const booksOperations = {
  fetchBooks,
  addBook,
};
export default booksOperations;

// axios
//   .post('http://localhost:8080/api/books', { book })
//   .then(response => {
//     console.log('response addBook:', response);
//     dispatch(addBooksSuccess(response.data));
//   })
//   .catch(error => dispatch(addBooksError(api.formatError(error))));
