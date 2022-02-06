import React, { lazy, Suspense, useContext } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import ForgotPassword from './modules/Auth/components/ForgotPassword/ForgotPassword';
import LoginForm from './modules/Auth/components/LoginForm/LoginForm';
import Preloader from './components/Preloader/Preloader';
import PrivateRoute from './components/Routes/PrivateRoutes';
import SectionLoader from './components/SectionLoader/SectionLoader';
import SignUp from './modules/Auth/components/SignupForm/SignUp';

import { GlobalStyles } from './global-styles/Global.styled';
import { WorkoutsContext } from './context/WorkoutsContext';
import MainLayout from './layouts/MainLayout';
import { AppRoutes } from './App.enums';
import ResetPasswordForm from './modules/Auth/components/ResetPasswordForm/ResetPasswordForm';
import history from './services/History.service';

const Home = lazy(() => import('./modules/Home/Home'));
const Workouts = lazy(() => import('./modules/Workouts/Workouts'));

const Routes = () => {
  const { loader } = useContext(WorkoutsContext);
  const [preloader] = loader;

  return (
    <Router history={history}>
      <GlobalStyles />
      {preloader ? (
        <Preloader />
      ) : (
        <MainLayout>
          <Switch>
            <Suspense fallback={<SectionLoader />}>
              <Route exact path={AppRoutes.Home}>
                <Home />
              </Route>
              <Route exact path={AppRoutes.Login}>
                <LoginForm />
              </Route>
              <Route exact path={AppRoutes.ForgotPassword}>
                <ForgotPassword />
              </Route>
              <Route exact path={AppRoutes.ResetPassword}>
                <ResetPasswordForm />
              </Route>
              <Route exact path={AppRoutes.SignUp}>
                <SignUp />
              </Route>
              <PrivateRoute exact path={AppRoutes.Workouts} component={Workouts} />
            </Suspense>
          </Switch>
        </MainLayout>
      )}
    </Router>
  );
};

export default Routes;
