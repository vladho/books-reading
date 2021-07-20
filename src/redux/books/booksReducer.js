import { createReducer, combineReducers } from '@reduxjs/toolkit';
import booksActions from './booksActions';
import tempBooks from '../../json/trainingListBooks.json';

const {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  addBooksRequest,
  addBooksSuccess,
  addBooksError,
} = booksActions;

const items = createReducer(tempBooks, {
  [fetchBooksRequest]: () => [],
  [fetchBooksSuccess]: (_, { payload }) => payload.data.result,

  [booksActions.addBooksSuccess]: (state = [], action) => {
    return [...state, action.payload.book];
  },
});

const loading = createReducer(false, {
  [fetchBooksRequest]: () => true,
  [fetchBooksSuccess]: () => false,
  [fetchBooksError]: () => false,
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
