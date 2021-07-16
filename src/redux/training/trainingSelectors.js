import { createSelector } from '@reduxjs/toolkit';
import { booksSelectors } from '../books';

// Массив id книг в списке тренировки
const getSelectIds = state => state.training.selectedIds;

// Массив объектов книг в списке тренировки
const getSelectBooks = createSelector(
  [booksSelectors.getAllBooks, getSelectIds],
  (books, ids) => books.filter(({ _id }) => ids.includes(_id)),
);

// Массив объектов книг в селекте добавления к тренировке
const getPlanNotSelectBooks = createSelector(
  [booksSelectors.getPlanBooks, getSelectIds],
  (books, ids) => books.filter(({ _id }) => !ids.includes(_id)),
);

const getLoading = state => state.training.loading;

const getError = state => state.training.error;

const trainingSelectors = {
  getSelectIds,
  getSelectBooks,
  getPlanNotSelectBooks,
  getLoading,
  getError,
};
export default trainingSelectors;
