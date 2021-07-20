import { createAction } from '@reduxjs/toolkit';

const fetchBooksRequest = createAction('books/fetch/request');
const fetchBooksSuccess = createAction('books/fetch/success');
const fetchBooksError = createAction('books/fetch/error');

const addBooksRequest = createAction('books/add/request');
const addBooksSuccess = createAction('books/add/success', book => ({
  payload: {
    book: {
      _id: new Date().getTime(),
      title: book.title,
      author: book.author,
      year: book.year,
      totalPages: book.totalPages,
      status: 'plan',
    },
  },
}));
const addBooksError = createAction('books/add/error');

const booksActions = {
  addBooksRequest,
  addBooksSuccess,
  addBooksError,
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
};
export default booksActions;
