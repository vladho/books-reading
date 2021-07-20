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
} = booksActions;

const addBook = (state = [], action) => {
  return [...state, action.payload];
};

const items = createReducer(tempBooks, {
  [fetchBooksRequest]: () => [],
  [fetchBooksSuccess]: (_, { payload }) => payload.data.result,

  [addBookSuccess]: addBook,
});

const loading = createReducer(false, {
  [fetchBooksRequest]: () => true,
  [fetchBooksSuccess]: () => false,
  [fetchBooksError]: () => false,
  [addBookRequest]: () => true,
  [addBookSuccess]: () => false,
  [addBookError]: () => false,
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
