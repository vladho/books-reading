import { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { mainRoutes } from '../../routes/mianRoutes';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';

const NavigationRoutes = () => {
    const isAuth = true;

    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
                {mainRoutes.map(route =>
                    route.isPrivate ? (
                        <PrivateRoute
                            {...route}
                            isAuth={isAuth}
                            key={route.name}
                        />
                    ) : (
                        <PublicRoute
                            {...route}
                            isAuth={isAuth}
                            key={route.name}
                        />
                    ),
                )}
            </Switch>
        </Suspense>
    );
};

export default NavigationRoutes;
