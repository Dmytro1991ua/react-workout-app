import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../AuthContext';

// blueprint for all private routes ==> if the user logged in a needed component will be displayed
const PrivateRoute = ({ component: Component, ...rest }) => {
  //const { authTokens } = useAuth(); // destructure a authTokens key that holds authentication token
  const { currentUser } = useAuth();

  return <Route {...rest} render={(props) => (currentUser ? <Component {...props} /> : <Redirect to='/login' />)} />;
};

export default PrivateRoute;
