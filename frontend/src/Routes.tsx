import React, { lazy, ReactElement, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { AppRoutes } from './App.enums';
import Preloader from './components/Preloader/Preloader';
import MainComponentsRoutes from './components/Routes/MainComponentsRoutes';
import NotFoundRoute from './components/Routes/NotFoundRoute';
import PrivateRoute from './components/Routes/PrivateRoutes';
import SectionLoader from './components/SectionLoader/SectionLoader';
import history from './services/History.service';

const HomePage = lazy(() => import('./modules/Home/Home'));
const LoginPage = lazy(() => import('./modules/Auth/components/LoginForm/LoginForm'));
const SignUpPage = lazy(() => import('./modules/Auth/components/SignupForm/SignUp'));
const ForgotPasswordPage = lazy(() => import('./modules/Auth/components/ForgotPassword/ForgotPassword'));
const ResetPasswordPage = lazy(() => import('./modules/Auth/components/ResetPasswordForm/ResetPasswordForm'));

const WorkoutsPage = lazy(() => import('./modules/Workouts/Workouts'));
const NotFoundPage = lazy(() => import('./modules/NotFoundPage/NotFoundPage'));
const ProfilePage = lazy(() => import('./modules/Profile/Profile'));
const WorkoutsDetailsPage = lazy(() => import('./modules/WorkoutsDetails/WorkoutDetails'));

const Routes = (): ReactElement => {
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
            AppRoutes.Profile,
            AppRoutes.WorkoutsDetails,
          ]}
        >
          <Suspense fallback={<SectionLoader />}>
            <MainComponentsRoutes exact path={AppRoutes.Home} component={HomePage} />
            <MainComponentsRoutes exact path={AppRoutes.Login} component={LoginPage} />
            <MainComponentsRoutes exact path={AppRoutes.ForgotPassword} component={ForgotPasswordPage} />
            <MainComponentsRoutes exact path={AppRoutes.ResetPassword} component={ResetPasswordPage} />
            <MainComponentsRoutes exact path={AppRoutes.SignUp} component={SignUpPage} />
            <PrivateRoute exact path={AppRoutes.Workouts} component={WorkoutsPage} />
            <PrivateRoute exact path={AppRoutes.Profile} component={ProfilePage} />
            <PrivateRoute exact path={AppRoutes.WorkoutsDetails} component={WorkoutsDetailsPage} />
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
