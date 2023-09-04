import { useCallback, useEffect, useState } from 'react';

import { selectIsUserAuthenticated } from '../../modules/Auth/User.slice';
import { useAppSelector } from '../../store/store.hooks';

const useGeolocation = (): CurrentLocationData => {
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);

  const [location, setLocation] = useState<CurrentLocationData>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    errorMessage: '',
  });

  const onSuccess = useCallback((location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  }, []);

  const onError = useCallback((errorMessage) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: 0,
        lng: 0,
      },
      errorMessage,
    });
  }, []);

  useEffect(() => {
    if (!navigator.geolocation)
      return onError({
        code: 0,
        errorMessage: 'Geolocation not supported',
      });

    if (isUserAuthenticated) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, [onError, onSuccess, isUserAuthenticated]);

  return location;
};

export default useGeolocation;
