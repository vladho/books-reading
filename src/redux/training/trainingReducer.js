import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';

const {
  addSelectedId,
  delSelectedId,
  clearSelectedIds,
  trainingStartDate,
  trainingEndDate,
  addResult,
} = trainingActions;

// Идет ли тренировка

const isStarted = createReducer(false, {});

// Книги в списке тренировки

const selectedIds = createReducer([], {
  [addSelectedId]: (state, { payload }) => [...state, payload],

  [delSelectedId]: (state, { payload }) => state.filter(id => id !== payload),

  [clearSelectedIds]: () => [],
});

const startDate = createReducer('', {
  [trainingStartDate]: (state, { payload }) => payload,
});

const endDate = createReducer('', {
  [trainingEndDate]: (state, { payload }) => payload,
});

const loading = createReducer(false, {});

const error = createReducer(null, {});

//Результаты
const results = createReducer([], {
  [addResult]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  isStarted,
  selectedIds,
  loading,
  error,
  startDate,
  endDate,
  results,
});
