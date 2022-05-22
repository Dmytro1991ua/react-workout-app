import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import PrivateRoute from './components/Routes/PrivateRoutes';
import SectionLoader from './components/SectionLoader/SectionLoader';
import { AppRoutes } from './App.enums';
import history from './services/History.service';
import MainComponentsRoutes from './components/Routes/MainComponentsRoutes';
import NotFoundRoute from './components/Routes/NotFoundRoute';
import Preloader from './components/Preloader/Preloader';

const HomePage = lazy(() => import('./modules/Home/Home'));
const LoginPage = lazy(() => import('./modules/Auth/components/LoginForm/LoginForm'));
const SignUpPage = lazy(() => import('./modules/Auth/components/SignupForm/SignUp'));
const ForgotPasswordPage = lazy(() => import('./modules/Auth/components/ForgotPassword/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('./modules/Auth/components/ResetPasswordForm/ResetPasswordForm'));

const WorkoutsPage = lazy(() => import('./modules/Workouts/Workouts'));
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
            <MainComponentsRoutes exact path={AppRoutes.Home} component={HomePage} />
            <MainComponentsRoutes exact path={AppRoutes.Login} component={LoginPage} />
            <MainComponentsRoutes exact path={AppRoutes.ForgotPassword} component={ForgotPasswordPage} />
            <MainComponentsRoutes exact path={AppRoutes.ResetPassword} component={ResetPasswordPage} />
            <MainComponentsRoutes exact path={AppRoutes.SignUp} component={SignUpPage} />
            <PrivateRoute path={AppRoutes.Workouts} component={WorkoutsPage} />
          </Suspense>
        </Route>
        <Suspense fallback={<Preloader />}>
          <NotFoundRoute component={NotFoundPage} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
