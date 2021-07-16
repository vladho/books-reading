import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';

const { addSelectedId, delSelectedId, clearSelectedIds } = trainingActions;

// Книги в списке тренировки

const selectedIds = createReducer([], {
  [addSelectedId]: (state, { payload }) => [...state, payload],

  [delSelectedId]: (state, { payload }) => state.filter(id => id !== payload),

  [clearSelectedIds]: () => [],
});

const loading = createReducer(false, {});

const error = createReducer(null, {});

export default combineReducers({
  selectedIds,
  loading,
  error,
});
