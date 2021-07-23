import { createReducer, combineReducers } from '@reduxjs/toolkit';
import booksActions from './booksActions';
import tempBooks from '../../json/trainingListBooks.json';

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

const addBook = (state = [], action) => {
  return [...state, action.payload];
};

const removeBook = (state, action) => {
  return state.filter(book => book._id !== action.payload);
};

const items = createReducer(tempBooks, {
  [fetchBooksRequest]: () => [],
  [fetchBooksSuccess]: (_, { payload }) => payload.data.books,
  // [fetchBooksSuccess]: (state, action) => action.payload,
  [addBookSuccess]: addBook,
  [removeBookSuccess]: removeBook,
});

const loading = createReducer(false, {
  [fetchBooksRequest]: () => true,
  [fetchBooksSuccess]: () => false,
  [fetchBooksError]: () => false,
  [addBookRequest]: () => true,
  [addBookSuccess]: () => false,
  [addBookError]: () => false,
  [removeBookRequest]: () => true,
  [removeBookSuccess]: () => false,
  [removeBookError]: () => false,
});

const error = createReducer(null, {
  [fetchBooksRequest]: () => null,
  [fetchBooksError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  loading,
  error,
});
