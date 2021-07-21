import { createSelector } from '@reduxjs/toolkit';
import { booksSelectors } from '../books';

// 📌 Идет ли тренировка

const getIsStarted = state => state.training.isStarted;

// 📌 Данные при активной тренировке

const getBooks = state => state.training.books;

const getStartDate = state => state.training.startDate;
const getEndDate = state => state.training.endDate;

// 📌 Данные при неактивной тренировке

const getSelectIds = state => state.training.selectedIds;

const getSelectBooks = createSelector(
  [booksSelectors.getAllBooks, getSelectIds],
  (books, ids) =>
    ids.reduce((acc, id) => {
      const book = books.find(({ _id }) => _id === id);

      return book ? [...acc, book] : acc;
    }, []),
);

const getPlanNotSelectBooks = createSelector(
  [booksSelectors.getPlanBooks, getSelectIds],
  (books, ids) => books.filter(({ _id }) => !ids.includes(_id)),
);

const selectStartDate = state => state.training.selectStartDate;
const selectEndDate = state => state.training.selectEndDate;

// 📌 Другое

const getLoading = state => state.training.loading;

const getError = state => state.training.error;

//Результаты
const getResults = state => state.training.results;

const trainingSelectors = {
  getIsStarted,
  getBooks,
  getStartDate,
  getEndDate,
  getSelectIds,
  getSelectBooks,
  getPlanNotSelectBooks,
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
