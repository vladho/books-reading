import { authSls } from './index';
import api from '../../services/api';
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

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const user = await api.register(credentials);

    dispatch(registerSuccess(user));
    dispatch(login(credentials));
  } catch (error) {
    dispatch(registerError(api.formatError(error)));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const { email, password } = credentials;
    const data = await api.login({ email, password });

    api.setToken(data.user.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(api.formatError(error)));
  }
};

const loginGoogle = credentials => async dispatch => {
  const { email, token, name } = credentials;

  const user = { email, token, name };

  dispatch(loginRequest());

  try {
    dispatch(refreshSuccess(token));
    dispatch(loginSuccess({ user }));
  } catch (error) {
    dispatch(loginError(api.formatError(error)));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await api.logOut();

    api.unsetToken();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(api.formatError(error)));

    if (error.response?.status === 401) {
      dispatch(refreshToken(logOut));
    }
  }
};

const refreshToken = prevOps => async (dispatch, getState) => {
  const refreshToken = authSls.getRefreshToken(getState());
  const sid = authSls.getSid(getState());

  api.setToken(refreshToken);
  dispatch(refreshRequest());

  try {
    const data = await api.refresh(sid);

    api.setToken(data.newAccessToken);
    dispatch(refreshSuccess(data));

    dispatch(prevOps());
  } catch (error) {
    dispatch(refreshError(api.formatError(error)));
  }
};

const authOperations = {
  register,
  loginGoogle,
  login,
  logOut,
  refreshToken,
};
export default authOperations;
