import { createReducer, combineReducers } from '@reduxjs/toolkit';
import tempBooks from '../../json/trainingListBooks.json';

const items = createReducer(tempBooks, {});

const loading = createReducer(false, {});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});
