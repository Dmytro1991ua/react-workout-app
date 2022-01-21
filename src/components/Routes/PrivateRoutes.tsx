import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppRoutes } from '../../App.enums';

import { useAuth } from '../../context/AuthContext';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

// blueprint for all private routes ==> if the user logged in a needed component will be displayed
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  //const { authTokens } = useAuth(); // destructure a authTokens key that holds authentication token
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props} /> : <Redirect to={{ pathname: AppRoutes.Login }} />)}
    />
  );
};

export default PrivateRoute;
