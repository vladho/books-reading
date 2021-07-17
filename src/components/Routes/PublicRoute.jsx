import { Redirect, Route } from 'react-router';

//заглушка
// const isAuth = true;

const PublicRoute = ({ path, exact, component, isAuth, isRestricted }) => {
  return isAuth && isRestricted ? (
    <Redirect to="/library" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};
export default PublicRoute;
