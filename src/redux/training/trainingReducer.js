import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';

const { addSelectedId, delSelectedId, clearSelectedIds } = trainingActions;

// Идет ли тренировка

const isStarted = createReducer(false, {});

// Книги в списке тренировки

const selectedIds = createReducer([], {
  [addSelectedId]: (state, { payload }) => [...state, payload],

  [delSelectedId]: (state, { payload }) => state.filter(id => id !== payload),

  [clearSelectedIds]: () => [],
});

const loading = createReducer(false, {});

const error = createReducer(null, {});

export default combineReducers({
  isStarted,
  selectedIds,
  loading,
  error,
});
