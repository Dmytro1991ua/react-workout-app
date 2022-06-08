import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import NotFoundLayout from './../../layouts/NotFoundLayout';

interface MainComponentsRoutesProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const NotFoundRoute = ({ component: Component, ...rest }: MainComponentsRoutesProps): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <NotFoundLayout>
          <Component {...props} />
        </NotFoundLayout>
      )}
    />
  );
};

export default NotFoundRoute;
