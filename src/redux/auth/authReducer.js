import { createReducer, combineReducers } from '@reduxjs/toolkit';
import authActs from './authActions';

const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} = authActs;

const initUser = { email: null, name: null };

const initTokens = { token: null };

const resetUserWhenInvalidSession = (
  state,
  { payload: { status, respMsg } },
) => {
  if (typeof respMsg !== 'string') return state;

  const normRespMsg = respMsg.toLowerCase();
  const isIncludesSessionOrUser =
    normRespMsg.includes('session') || normRespMsg.includes('user');

  if (status === 404 && isIncludesSessionOrUser) {
    return initUser;
  }

  return state;
};

const resetTokensWhenInvalidSession = (
  state,
  { payload: { status, respMsg } },
) => {
  if (typeof respMsg !== 'string') return state;

  const normRespMsg = respMsg.toLowerCase();
  const isIncludesSessionOrUser =
    normRespMsg.includes('session') || normRespMsg.includes('user');

  if (status === 404 && isIncludesSessionOrUser) {
    return initTokens;
  }

  return state;
};

const user = createReducer(initUser, {
  [loginSuccess]: (_, { payload }) => {
    const { email, name, training } = payload.user;

    return { email, name, training };
  },

  [logoutSuccess]: () => initUser,
  [logoutError]: resetUserWhenInvalidSession,

  [refreshError]: () => initUser,
});

const token = createReducer(initTokens, {
  [loginSuccess]: (
    _,
    {
      payload: {
        user: { token: token },
        refreshToken,
        sid,
      },
    },
  ) => ({
    token,
    refreshToken,
    sid,
  }),

  [logoutSuccess]: () => initTokens,
  [logoutError]: resetTokensWhenInvalidSession,

  [refreshSuccess]: (
    _,
    { payload: { newAccessToken, newRefreshToken, newSid } },
  ) => ({
    token: newAccessToken,
    refreshToken: newRefreshToken,
    sid: newSid,
  }),
  [refreshError]: () => initTokens,
});

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,

  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,

  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,

  [refreshRequest]: () => true,
  [refreshSuccess]: () => false,
  [refreshError]: () => false,
});

const error = createReducer(null, {
  [registerRequest]: () => null,
  [registerError]: (_, { payload }) => payload,

  [loginRequest]: () => null,
  [loginError]: (_, { payload }) => payload,

  [logoutRequest]: () => true,
  [logoutError]: (_, { payload }) => payload,

  [refreshRequest]: () => true,
  [refreshError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  loading,
  error,
});
