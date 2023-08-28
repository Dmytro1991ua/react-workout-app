import { useCallback, useEffect, useState } from 'react';

import { toastService } from '../../../../../../../services/Toast.service';

type HoopProps = {
  workout: WorkoutItem;
};

type ReturnedHookType = {
  currentWeatherIcon: string | null;
  isWorkoutInFavorites: boolean;
};

export const useWorkoutHeader = ({ workout }: HoopProps): ReturnedHookType => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<string | null>(null);

  const isWorkoutInFavorites = workout.isFavorite === true;

  const getCurrentWeatherIcon = useCallback(async (): Promise<void> => {
    try {
      const currentWeatherIcon = `${process.env.REACT_APP_WEATHER_API_ICON}/wn/${workout.weatherInfo?.weatherInfo[0].icon}.png`;

      setCurrentWeatherIcon(currentWeatherIcon);
    } catch {
      toastService.error('Failed to get current weather icon');
    }
  }, [workout.weatherInfo?.weatherInfo]);

  useEffect(() => {
    getCurrentWeatherIcon();
  }, [getCurrentWeatherIcon]);

  return {
    currentWeatherIcon,
    isWorkoutInFavorites,
  };
};
