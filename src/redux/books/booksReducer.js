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
  updateResumeBookRequest,
  updateResumeBookSuccess,
  updateResumeBookError,
  removeBookRequest,
  removeBookSuccess,
  removeBookError,
  firstVisitSuccess,
  secondVisitSuccess,
} = booksActions;

const { logoutRequest, logoutSuccess, logoutError } = authActions;

const addBook = (state = [], action) => {
  return [...state, action.payload.data];
};

const removeBook = (state, action) => {
  return state.filter(book => book._id !== action.payload);
};

const items = createReducer([], {
  [fetchBooksSuccess]: (_, { payload }) => payload.data.books,
  [addBookSuccess]: addBook,
  [updateResumeBookSuccess]: (state, { payload }) => {
    const id = payload.data.book._id;
    const stateBook = payload.data.book;

    return state.map(book =>
      book._id === id ? { ...book, ...stateBook } : book,
    );
  },
  [removeBookSuccess]: removeBook,
  [logoutSuccess]: () => [],
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
  [updateResumeBookRequest]: () => true,
  [updateResumeBookSuccess]: () => false,
  [updateResumeBookError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

const error = createReducer(null, {
  [fetchBooksRequest]: () => null,
  [addBookRequest]: () => null,
  [updateResumeBookRequest]: () => null,
  [removeBookRequest]: () => null,
  [logoutRequest]: () => null,

  [fetchBooksError]: (_, { payload }) => payload,
  [addBookError]: (_, { payload }) => payload,
  [updateResumeBookError]: (_, { payload }) => payload,
  [removeBookError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
});

const firstVisit = createReducer(false, {
  [firstVisitSuccess]: () => true,
  [secondVisitSuccess]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  items,
  firstVisit,
  loading,
  error,
});
