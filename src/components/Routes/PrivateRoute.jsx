import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ path, exact, component, isAuth = true }) => {
    return isAuth ? (
        <Route path={path} exact={exact} component={component} />
    ) : (
        <Redirect to="/login" />
    );
};
export default PrivateRoute;
