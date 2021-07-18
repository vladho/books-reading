import { createReducer, combineReducers } from '@reduxjs/toolkit';
import booksActions from './booksActions';
import tempBooks from '../../json/trainingListBooks.json';

const items = createReducer(tempBooks, {
  [booksActions.fetchBooksSuccess]: (_, action) => {
    // console.log('booksActions.fetchBooksSuccess:', action.payload);
    return action.payload;
  },

  [booksActions.addBooksSuccess]: (state = [], action) => {
    return [...state, action.payload.book];
  },
});

const loading = createReducer(false, {});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});
