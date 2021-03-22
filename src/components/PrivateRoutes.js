import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../AuthContext";

// blueprint for all private routes ==> if the user logged in a needed component will be displayed
const PrivateRoute = ({ component: Component, ...rest }) => {
   const isAuthenticated = useAuth(); // useAuth() will always return false
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
