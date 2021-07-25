import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';

const {
  getCurrTrainingRequest,
  getCurrTrainingSuccess,
  getCurrTrainingError,
  startTrainingRequest,
  startTrainingSuccess,
  startTrainingError,
  addResultRequest,
  addResultSuccess,
  addResultError,
  addSelectedId,
  delSelectedId,
  trainingStartDate,
  trainingEndDate,
} = trainingActions;

// 📌 Идет ли тренировка

const isStarted = createReducer(false, {
  [getCurrTrainingRequest]: () => false,
  [getCurrTrainingSuccess]: (_, { payload: { data } }) => !!data?.inProgress,

  [startTrainingSuccess]: (_, { payload: { data } }) => !!data?.inProgress,

  [addResultSuccess]: (_, { payload: { data } }) => !!data?.inProgress,
});

// 📌 Данные при активной тренировке

const setBooksOnSuccess = (_, { payload: { data } }) => {
  const books = data?.books;

  return Array.isArray(books) ? books : [];
};

const books = createReducer([], {
  [getCurrTrainingRequest]: () => [],
  [getCurrTrainingSuccess]: setBooksOnSuccess,

  [startTrainingSuccess]: setBooksOnSuccess,

  [addResultSuccess]: setBooksOnSuccess,
});

const startDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',
  [getCurrTrainingSuccess]: (_, { payload: { data } }) => data?.startDate || '',

  [startTrainingSuccess]: (_, { payload: { data } }) => data?.startDate || '',

  [addResultSuccess]: (_, { payload: { data } }) => data?.startDate || '',
});

const endDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',
  [getCurrTrainingSuccess]: (_, { payload: { data } }) =>
    data?.finishDate || '',

  [startTrainingSuccess]: (_, { payload: { data } }) => data?.finishDate || '',

  [addResultSuccess]: (_, { payload: { data } }) => data?.finishDate || '',
});

const setResultsOnSuccess = (_, { payload: { data } }) => {
  const results = data?.result;

  return Array.isArray(results) ? results : [];
};

const results = createReducer([], {
  [getCurrTrainingRequest]: () => [],
  [getCurrTrainingSuccess]: setResultsOnSuccess,

  [startTrainingSuccess]: setResultsOnSuccess,

  [addResultSuccess]: setResultsOnSuccess,
});

// 📌 Данные при неактивной тренировке

const selectedIds = createReducer([], {
  [getCurrTrainingRequest]: () => [],

  [startTrainingSuccess]: () => [],

  [addSelectedId]: (state, { payload }) => [...state, payload],

  [delSelectedId]: (state, { payload }) => state.filter(id => id !== payload),
});

const selectStartDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',

  [startTrainingSuccess]: () => '',

  [trainingStartDate]: (_, { payload }) => payload,
});

const selectEndDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',

  [startTrainingSuccess]: () => '',

  [trainingEndDate]: (_, { payload }) => payload,
});

// 📌 Другое

const loading = createReducer(false, {
  [getCurrTrainingRequest]: () => true,
  [getCurrTrainingSuccess]: () => false,
  [getCurrTrainingError]: () => false,

  [startTrainingRequest]: () => true,
  [startTrainingSuccess]: () => false,
  [startTrainingError]: () => false,

  [addResultRequest]: () => true,
  [addResultSuccess]: () => false,
  [addResultError]: () => false,
});

const error = createReducer(null, {
  [getCurrTrainingRequest]: () => null,
  [getCurrTrainingError]: (_, { payload }) => payload,

  [startTrainingRequest]: () => null,
  [startTrainingError]: (_, { payload }) => payload,

  [addResultRequest]: () => null,
  [addResultError]: (_, { payload }) => payload,
});

export default combineReducers({
  isStarted,
  books,
  startDate,
  endDate,
  results,
  selectedIds,
  selectStartDate,
  selectEndDate,
  loading,
  error,
});
