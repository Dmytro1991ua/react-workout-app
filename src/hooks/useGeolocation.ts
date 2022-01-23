import { useContext, useEffect } from 'react';

import { WorkoutsContext } from '../context/WorkoutsContext';

//custom hook to get a user's current location
const useGeolocation = () => {
  // destructure current location "state"
  const { currentLocation } = useContext(WorkoutsContext);
  const [location, setLocation] = currentLocation;

  const onSuccess = (location: any) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (errorMessage: any) => {
    setLocation({
      loaded: true,
      errorMessage,
    });
  };

  useEffect(() => {
    if (!navigator.geolocation)
      return onError({
        code: 0,
        errorMessage: 'Geolocation not supported',
      });
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
