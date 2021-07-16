import { createReducer, combineReducers } from '@reduxjs/toolkit';
import booksActions from './booksActions';

const items = createReducer([], {
  [booksActions.fetchBooksSuccess]: (state, action) => {
    // console.log('booksActions.fetchBooksSuccess:', action.payload);
    return action.payload;
  },

  [booksActions.addBooksSuccess]: (state = [], action) => {
    return [...state, action.payload.book];
  },
});

export default combineReducers({
  items,
});
