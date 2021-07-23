import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import { booksReducer } from './books';
import { trainingReducer } from './training';
import { authSls } from '../redux/auth';
import api from '../services/api';

const persistAuthConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['user', 'token'],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    books: booksReducer,
    training: trainingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store, null, () => {
  const token = authSls.getAccessToken(store.getState());
  if (token) api.setToken(token);
});

// export const persistor = persistStore(store);
