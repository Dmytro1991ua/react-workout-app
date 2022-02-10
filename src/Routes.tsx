import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import ForgotPassword from './modules/Auth/components/ForgotPassword/ForgotPassword';
import LoginForm from './modules/Auth/components/LoginForm/LoginForm';
import PrivateRoute from './components/Routes/PrivateRoutes';
import SectionLoader from './components/SectionLoader/SectionLoader';
import SignUp from './modules/Auth/components/SignupForm/SignUp';
import { AppRoutes } from './App.enums';
import ResetPasswordForm from './modules/Auth/components/ResetPasswordForm/ResetPasswordForm';
import history from './services/History.service';
import MainComponentsRoutes from './components/Routes/MainComponentsRoutes';
import NotFoundRoute from './components/Routes/NotFoundRoute';

const Home = lazy(() => import('./modules/Home/Home'));
const Workouts = lazy(() => import('./modules/Workouts/Workouts'));
const NotFoundPage = lazy(() => import('./modules/NotFoundPage/NotFoundPage'));

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path={[
            AppRoutes.Home,
            AppRoutes.Login,
            AppRoutes.ForgotPassword,
            AppRoutes.ResetPassword,
            AppRoutes.SignUp,
            AppRoutes.Workouts,
          ]}
        >
          <Suspense fallback={<SectionLoader />}>
            <MainComponentsRoutes exact path={AppRoutes.Home} component={Home} />
            <MainComponentsRoutes exact path={AppRoutes.Login} component={LoginForm} />
            <MainComponentsRoutes exact path={AppRoutes.ForgotPassword} component={ForgotPassword} />
            <MainComponentsRoutes exact path={AppRoutes.ResetPassword} component={ResetPasswordForm} />
            <MainComponentsRoutes exact path={AppRoutes.SignUp} component={SignUp} />
            <PrivateRoute path={AppRoutes.Workouts} component={Workouts} />
          </Suspense>
        </Route>
        <Suspense fallback={<SectionLoader />}>
          <NotFoundRoute component={NotFoundPage} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
