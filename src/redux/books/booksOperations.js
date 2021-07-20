import { api } from '../../services';
import booksActions from './booksActions';

const { fetchBooksRequest, fetchBooksSuccess, fetchBooksError } = booksActions;

const fetchBooks = () => async dispatch => {
  dispatch(fetchBooksRequest());

  try {
    const data = await api.getAllBooks();

    dispatch(fetchBooksSuccess(data));
  } catch (error) {
    dispatch(fetchBooksError(api.formatError(error)));
  }
};

const booksOperations = {
  fetchBooks,
};
export default booksOperations;
