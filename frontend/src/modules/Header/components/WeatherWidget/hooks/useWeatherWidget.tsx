import { useEffect, useState } from 'react';

import useDeviceDetect from '../../../../../cdk/hooks/useDeviceDetect';

type HookProps = {
  currentWeather: CurrentWeatherData | null;
};

type ReturnedHookType = {
  isMobileScreen: boolean;
  timeValue: string | null;
  currentWeatherIcon: string;
};

export const useWeatherWidget = ({ currentWeather }: HookProps): ReturnedHookType => {
  const [timeValue, setTimeValue] = useState<string | null>(null);

  const isMobileScreen = useDeviceDetect();

  const currentWeatherIcon = `${process.env.REACT_APP_WEATHER_API_ICON}/wn/${currentWeather?.weatherInfo[0].icon}@2x.png`;

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTimeValue(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { isMobileScreen, timeValue, currentWeatherIcon };
};
