import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AppRoutes } from '../../App.enums';
import MainLayout from '../../layouts/MainLayout';
import { selectIsUserAuthenticated, selectUserLoading } from '../../modules/Auth/Auth.slice';
import { useAppSelector } from '../../store/store.hooks';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

// blueprint for all private routes ==> if the user logged in a needed component will be displayed
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const isUserLoading = useAppSelector(selectUserLoading);

  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          {isUserAuthenticated || isUserLoading ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: AppRoutes.Login, state: { from: props.location } }} />
          )}
        </MainLayout>
      )}
    />
  );
};

export default PrivateRoute;
