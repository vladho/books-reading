import { createReducer, combineReducers } from '@reduxjs/toolkit';
import booksActions from './booksActions';
import authActions from '../auth/authActions';
// import tempBooks from '../../json/trainingListBooks.json';

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

const { logoutRequest, logoutSuccess, logoutError } = authActions;

const addBook = (state = [], action) => {
  return [...state, action.payload.data];
};

const removeBook = (state, action) => {
  return state.filter(book => book._id !== action.payload);
};

const items = createReducer([], {
  [fetchBooksRequest]: () => [],
  [fetchBooksSuccess]: (_, { payload }) => payload.data.books,
  [addBookSuccess]: addBook,
  [removeBookSuccess]: removeBook,
  [logoutSuccess]: () => [],
});

const loading = createReducer(true, {
  [fetchBooksRequest]: () => true,
  [fetchBooksSuccess]: () => false,
  [fetchBooksError]: () => false,
  [addBookRequest]: () => true,
  [addBookSuccess]: () => false,
  [addBookError]: () => false,
  [removeBookRequest]: () => true,
  [removeBookSuccess]: () => false,
  [removeBookError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

const error = createReducer(null, {
  [fetchBooksRequest]: () => null,
  [addBookRequest]: () => null,
  [removeBookRequest]: () => null,
  [logoutRequest]: () => null,

  [fetchBooksError]: (_, { payload }) => payload,
  [addBookError]: (_, { payload }) => payload,
  [removeBookError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
});
