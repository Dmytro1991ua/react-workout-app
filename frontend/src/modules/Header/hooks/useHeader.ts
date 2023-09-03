import { useCallback, useState } from 'react';

import useGeolocation from '../../../cdk/hooks/useGeolocation';
import { useAppSelector } from '../../../store/store.hooks';
import { selectWeatherDetailsBasedOnLocation } from '../../WeatherDetails/WeatherDetails.slice';

type HookReturnedType = {
  isBurgerIconOpened: boolean;
  weatherBasedOnCurrentLocation: CurrentWeatherData | null;
  currentLocation: CurrentLocationData;
  onOpenBurgerMenu: () => void;
};

export const useHeader = (): HookReturnedType => {
  const weatherBasedOnCurrentLocation = useAppSelector(selectWeatherDetailsBasedOnLocation);

  const currentLocation: CurrentLocationData = useGeolocation();

  const [isBurgerIconOpened, setIsBurgerIconOpened] = useState(false);

  const onOpenBurgerMenu = useCallback((): void => {
    setIsBurgerIconOpened(!isBurgerIconOpened);
  }, [isBurgerIconOpened]);

  return {
    isBurgerIconOpened,
    weatherBasedOnCurrentLocation,
    currentLocation,
    onOpenBurgerMenu,
  };
};
