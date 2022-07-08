import { getIdToken, onAuthStateChanged } from 'firebase/auth';
import React, { ReactElement, useCallback, useEffect } from 'react';

import useGeolocation from './cdk/hooks/useGeolocation';
import { auth } from './firebase';
import { authService } from './modules/Auth/Auth.service';
import { validateUserAction } from './modules/Auth/User.actions';
import { selectIsUserAuthenticated, setLoadingStatus } from './modules/Auth/User.slice';
import { loadWeatherBasedOnCurrentLocationAction } from './modules/WeatherDetails/WorkoutsDetails.actions';
import { loadAvailableWorkoutsAction } from './modules/Workouts/Workouts.actions';
import Routes from './Routes';
import { useAppDispatch, useAppSelector } from './store/store.hooks';

function App(): ReactElement {
  const dispatch = useAppDispatch();

  const currentLocation: CurrentLocationData = useGeolocation();
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const setCurrentUser = useCallback(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLoadingStatus('loading'));

        getIdToken(user).then(async (token) => {
          authService.setToken(token);
        });

        const userFirebaseProviders: string[] = user.providerData.map((item) => item.providerId);

        dispatch(validateUserAction(userFirebaseProviders));
      } else {
        dispatch(setLoadingStatus('failed'));
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
