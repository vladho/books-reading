import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';

const {
  getCurrTrainingRequest,
  getCurrTrainingSuccess,
  getCurrTrainingError,
  addSelectedId,
  delSelectedId,
  clearSelectedIds,
  trainingStartDate,
  trainingEndDate,
  addResult,
} = trainingActions;

// 📌 Идет ли тренировка

const isStarted = createReducer(false, {
  [getCurrTrainingRequest]: () => false,
  // [getCurrTrainingSuccess]: (_, { payload: { data } }) => !!data?.inProgress,
});

// 📌 Данные при активной тренировке

const books = createReducer([], {
  [getCurrTrainingRequest]: () => [],
  [getCurrTrainingSuccess]: (_, { payload: { data } }) => {
    const books = data?.books;

    return Array.isArray(books) ? books : [];
  },
});

const startDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',
  [getCurrTrainingSuccess]: (_, { payload: { data } }) => data?.startDate || '',
});

const endDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',
  [getCurrTrainingSuccess]: (_, { payload: { data } }) =>
    data?.finishDate || '',
});

// 📌 Данные при неактивной тренировке

const selectedIds = createReducer([], {
  [addSelectedId]: (state, { payload }) => [...state, payload],

  [delSelectedId]: (state, { payload }) => state.filter(id => id !== payload),

  [clearSelectedIds]: () => [],
});

const selectStartDate = createReducer('', {
  [trainingStartDate]: (_, { payload }) => payload,
});

const selectEndDate = createReducer('', {
  [trainingEndDate]: (_, { payload }) => payload,
});

// 📌 Другое

const loading = createReducer(false, {
  [getCurrTrainingRequest]: () => true,
  [getCurrTrainingSuccess]: () => false,
  [getCurrTrainingError]: () => false,
});

const error = createReducer(null, {
  [getCurrTrainingRequest]: () => null,
  [getCurrTrainingError]: (_, { payload }) => payload,
});

//Результаты
const results = createReducer([], {
  [addResult]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  isStarted,
  books,
  startDate,
  endDate,
  selectedIds,
  selectStartDate,
  selectEndDate,
  loading,
  error,
  results,
});
