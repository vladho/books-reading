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

const isStarted = createReducer(false, {});

// 📌 Данные при активной тренировке

const books = createReducer([], {});

const startDate = createReducer('', {});

const endDate = createReducer('', {});

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

const loading = createReducer(false, {});

const error = createReducer(null, {});

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
