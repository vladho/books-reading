import { createAction } from '@reduxjs/toolkit';

const fetchBooksRequest = createAction('books/fetch/request');
const fetchBooksSuccess = createAction('books/fetch/success');
const fetchBooksError = createAction('books/fetch/error');

const addBookRequest = createAction('books/add/request');
const addBookSuccess = createAction('books/add/success');
const addBookError = createAction('books/add/error');

const removeBookRequest = createAction('books/remove/request');
const removeBookSuccess = createAction('books/remove/success');
const removeBookError = createAction('books/remove/error');

const updateResumeBookRequest = createAction('books/update/request');
const updateResumeBookSuccess = createAction('books/update/success');
const updateResumeBookError = createAction('books/update/error');

const firstVisitSuccess = createAction('books/firstVisit/Success');
const secondVisitSuccess = createAction('books/secondVisit/Success');

const booksActions = {
  addBookRequest,
  addBookSuccess,
  addBookError,
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
  removeBookRequest,
  removeBookSuccess,
  removeBookError,
  updateResumeBookRequest,
  updateResumeBookSuccess,
  updateResumeBookError,
  firstVisitSuccess,
  secondVisitSuccess,
};
export default booksActions;
