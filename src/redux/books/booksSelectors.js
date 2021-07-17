import { createSelector } from '@reduxjs/toolkit';

const getAllBooks = state => state.books.items;

const getPlanBooks = createSelector([getAllBooks], books =>
  books.filter(({ status }) => status === 'plan'),
);

const getTrainBooks = createSelector([getAllBooks], books =>
  books.filter(({ training }) => training),
);

const getLoading = state => state.books.loading;

const getError = state => state.books.error;

const projectsSelectors = {
  getAllBooks,
  getPlanBooks,
  getTrainBooks,
  getLoading,
  getError,
};
export default projectsSelectors;
