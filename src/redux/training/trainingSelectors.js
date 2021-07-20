import { createSelector } from '@reduxjs/toolkit';
import { booksSelectors } from '../books';

// Идет ли тренировка
const getIsStarted = state => state.training.isStarted;

// Массив id книг в списке тренировки
const getSelectIds = state => state.training.selectedIds;

// Массив объектов книг в списке тренировки
const getSelectBooks = createSelector(
  [booksSelectors.getAllBooks, getSelectIds],
  (books, ids) =>
    ids.reduce((acc, id) => {
      const book = books.find(({ _id }) => _id === id);

      return book ? [...acc, book] : acc;
    }, []),
);

// Массив объектов книг в селекте добавления к тренировке
const getPlanNotSelectBooks = createSelector(
  [booksSelectors.getPlanBooks, getSelectIds],
  (books, ids) => books.filter(({ _id }) => !ids.includes(_id)),
);

const getBooks = state => state.training.books;

const selectStartDate = state => state.training.selectStartDate;
const selectEndDate = state => state.training.selectEndDate;

const getLoading = state => state.training.loading;

const getError = state => state.training.error;

//Результаты
const getResults = state => state.training.results;

const trainingSelectors = {
  getIsStarted,
  getSelectIds,
  getSelectBooks,
  getPlanNotSelectBooks,
  getBooks,
  selectStartDate,
  selectEndDate,
  getLoading,
  getError,
  getResults,
};
export default trainingSelectors;

// const getSelectBooks = createSelector(
//   [booksSelectors.getAllBooks, getSelectIds],
//   (books, ids) => books.filter(({ _id }) => ids.includes(_id)),
// );
