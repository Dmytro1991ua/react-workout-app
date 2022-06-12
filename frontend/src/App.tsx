import React, { ReactElement, useCallback, useEffect } from 'react';
import { auth } from './firebase';
import useGeolocation from './hooks/useGeolocation';
import { authService } from './modules/Auth/Auth.service';
import { selectIsUserAuthenticated, setLoadingStatus, setUser } from './modules/Auth/User.slice';
import { loadWeatherBasedOnCurrentLocationAction } from './modules/WeatherDetails/WorkoutsDetails.actions';
import { loadAvailableWorkoutsAction } from './modules/Workouts/Workouts.actions';

import Routes from './Routes';
import { useAppDispatch, useAppSelector } from './store/store.hooks';

function App(): ReactElement {
  const dispatch = useAppDispatch();

  const currentLocation: CurrentLocationData = useGeolocation();
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const setCurrentUser = useCallback(() => {
    dispatch(setLoadingStatus('loading'));

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setLoadingStatus('loading'));

        user.getIdToken().then(async (token) => {
          authService.setToken(token);

          authService.validateUser().then((user) => {
            if (user) {
              dispatch(
                setUser({
                  uid: user.uid,
                  name: user.name,
                  email: user.email,
                  photoURL: user.photoURL,
                  phoneNumber: user.phoneNumber,
                  emailVerified: user.emailVerified,
                })
              );
            }
          });
        });
      } else {
        dispatch(setUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    setCurrentUser();

    if (isUserAuthenticated) {
      dispatch(loadWeatherBasedOnCurrentLocationAction(currentLocation));
      dispatch(loadAvailableWorkoutsAction());
    }
  }, [setCurrentUser, currentLocation, dispatch, isUserAuthenticated]);

  return <Routes />;
}

export default App;
