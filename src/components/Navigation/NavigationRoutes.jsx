import { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { mainRoutes } from '../../routes/mianRoutes';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import Spinner from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import { authSls } from '../../redux/auth';
import LocatinTocen from '../auth/googleLogin';

const NavigationRoutes = () => {
  const isAuth = useSelector(authSls.getIsAuth);

  LocatinTocen();

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {mainRoutes.map(route =>
          route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.name} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.name} />
          ),
        )}
        <Redirect to="/login" />
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
