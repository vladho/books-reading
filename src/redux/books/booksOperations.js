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
  updateResumeBookRequest,
  updateResumeBookSuccess,
  updateResumeBookError,
  firstVisitSuccess,
  secondVisitSuccess,
} = booksActions;

const fetchBooks = () => async dispatch => {
  dispatch(fetchBooksRequest());

  try {
    const data = await api.getAllBooks();
    // console.log(data.data.books.length);
    dispatch(fetchBooksSuccess(data));
    if (data.data.books.length === 0) {
      dispatch(firstVisitSuccess());
    }
    if (data.data.books.length > 0) {
      dispatch(secondVisitSuccess());
    }
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
  try {
    axios
      .delete(`http://localhost:8080/api/books/${id}`)
      .then(() => dispatch(removeBookSuccess(id)));
  } catch (error) {
    dispatch(removeBookError(api.formatError(error)));
  }
};

const updateResumeBook = data => async dispatch => {
  // dispatch(updateResumeBookRequest());
  const { _id: id, resume, rating } = data;

  try {
    const result = await axios.patch(`http://localhost:8080/api/books/${id}`, {
      rating,
      resume,
    });
    console.log(result);
    // dispatch(updateResumeBookSuccess());
  } catch (error) {
    console.log(error);
    // dispatch(updateResumeBookError());
  }
};

const booksOperations = {
  fetchBooks,
  addBook,
  removeBook,
  updateResumeBook,
};

export default booksOperations;
