const getAccessToken = state => state.auth.token.token;

const getIsAuth = state => !!getAccessToken(state);

const getRefreshToken = state => state.auth.token;

const getSid = state => state.auth.token.sid;

const getUserEmail = state => state.auth.user.email;

const getError = state => state.auth.error;

const getLoading = state => state.auth.loading;

const authSelectors = {
  getAccessToken,
  getRefreshToken,
  getSid,
  getIsAuth,
  getUserEmail,
  getError,
  getLoading,
};
export default authSelectors;
