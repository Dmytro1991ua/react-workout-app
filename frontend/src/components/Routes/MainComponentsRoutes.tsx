import React, { ReactElement } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';

interface MainComponentsRoutesProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const MainComponentsRoutes = ({ component: Component, ...rest }: MainComponentsRoutesProps): ReactElement => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default MainComponentsRoutes;
