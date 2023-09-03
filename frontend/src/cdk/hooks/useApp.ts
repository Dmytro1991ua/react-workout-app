import { getIdToken, onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect } from 'react';

import { auth } from '../../firebase';
import { validateUserAction } from '../../modules/Auth/User.actions';
import { selectIsUserAuthenticated, setLoadingStatus } from '../../modules/Auth/User.slice';
import { loadWeatherBasedOnCurrentLocationAction } from '../../modules/WeatherDetails/WorkoutsDetails.actions';
import { loadAvailableWorkoutsAction } from '../../modules/Workouts/Workouts.actions';
import { useAppDispatch, useAppSelector } from '../../store/store.hooks';
import { authService } from './../../modules/Auth/Auth.service';
import useGeolocation from './useGeolocation';

export const useApp = (): void => {
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
    const unsubscribeFromAuth = setCurrentUser();

    if (isUserAuthenticated) {
      dispatch(loadWeatherBasedOnCurrentLocationAction(currentLocation));
      dispatch(loadAvailableWorkoutsAction());
    }

    return () => {
      unsubscribeFromAuth();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserAuthenticated]);
};
