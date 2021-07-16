import { createAction } from '@reduxjs/toolkit';

const fetchBooksRequest = createAction('books/fetch/request');
const fetchBooksSuccess = createAction('books/fetch/success');
const fetchBooksError = createAction('books/fetch/error');

const addBooksRequest = createAction('books/add/request');
const addBooksSuccess = createAction('books/add/success', book => ({
  payload: {
    book: {
      id: new Date().getTime(),
      name: book.name,
      author: book.author,
      year: book.year,
      page: book.page,
      status: 'plan',
    },
  },
}));
const addBooksError = createAction('books/add/error');

export default {
  addBooksRequest,
  addBooksSuccess,
  addBooksError,
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
};
