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
    axios
      .post('https://books-reading-backend.herokuapp.com/api/books', book)
      .then(response => {
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
      .delete(`https://books-reading-backend.herokuapp.com/api/books/${id}`)
      .then(() => dispatch(removeBookSuccess(id)));
  } catch (error) {
    dispatch(removeBookError(api.formatError(error)));
  }
};

const updateResumeBook = (id, rating, resume) => async dispatch => {
  dispatch(updateResumeBookRequest());
  try {
    const { data } = await axios.patch(
      `https://books-reading-backend.herokuapp.com/api/books/${id}`,
      {
        rating,
        resume,
      },
    );
    dispatch(updateResumeBookSuccess(data));
  } catch (error) {
    console.log(error);
    dispatch(updateResumeBookError());
  }
};

const booksOperations = {
  fetchBooks,
  addBook,
  removeBook,
  updateResumeBook,
};

export default booksOperations;
