import { createAction } from '@reduxjs/toolkit';

const fetchBooksRequest = createAction('books/fetch/request');
const fetchBooksSuccess = createAction('books/fetch/success');
const fetchBooksError = createAction('books/fetch/error');

const addBooksRequest = createAction('books/add/request');
const addBooksSuccess = createAction('books/add/success');
const addBooksError = createAction('books/add/error');

const removeBookRequest = createAction('books/remove/request');
const removeBookSuccess = createAction('books/remove/success');
const removeBookError = createAction('books/remove/error');

const booksActions = {
  addBooksRequest,
  addBooksSuccess,
  addBooksError,
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  removeBookRequest,
  removeBookSuccess,
  removeBookError,
};
export default booksActions;
