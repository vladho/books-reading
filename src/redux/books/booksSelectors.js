import { createSelector } from '@reduxjs/toolkit';

const getAllBooks = state => state.books.items;

const getPlanBooks = createSelector([getAllBooks], books =>
  books.filter(({ status }) => status === 'plan'),
);

const getLoading = state => state.books.loading;

const getError = state => state.books.error;

const projectsSelectors = {
  getAllBooks,
  getPlanBooks,
  getLoading,
  getError,
};
export default projectsSelectors;
