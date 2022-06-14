import React, { useEffect, useState } from 'react';

import useDeviceDetect from '../../../../hooks/useDeviceDetect';
import { kelvinToCelsius } from '../../../Workouts/Workouts.utils';
import {
  CityWeatherLabelWrapper,
  CityWeatherLabel,
  WeatherTemperature,
  WeatherWidgetTop,
  WeatherWidgetWrapper,
  WeatherIcon,
  MobileWidgetContainer,
  MobileWidgetTitle,
  MobileWidgetSubtitle,
} from './WeatherWidget.styled';
interface WeatherWidgetProps {
  currentWeather: CurrentWeatherData | null;
}

const WeatherWidget = ({ currentWeather }: WeatherWidgetProps) => {
  const isMobileScreen = useDeviceDetect();

  const [timeValue, setTimeValue] = useState<string | null>(null);
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

  const desktopWidgetView = (
    <WeatherWidgetWrapper>
      <WeatherWidgetTop>
        <WeatherTemperature>{kelvinToCelsius(currentWeather?.temperature as number)} ℃</WeatherTemperature>
        <CityWeatherLabelWrapper>
          <CityWeatherLabel>
            {currentWeather?.city}, {currentWeather?.countryInfo.country}
          </CityWeatherLabel>
          <CityWeatherLabel>{currentWeather?.weatherInfo[0].description}</CityWeatherLabel>
        </CityWeatherLabelWrapper>
      </WeatherWidgetTop>
      <WeatherIcon src={currentWeatherIcon} alt='weather icon' />
      <p style={{ position: 'absolute', bottom: '9%', left: '50%', transform: 'translateX(-50%)' }}>{timeValue}</p>
    </WeatherWidgetWrapper>
  );

  const mobileWidgetView = (
    <MobileWidgetContainer>
      <MobileWidgetTitle>{kelvinToCelsius(currentWeather?.temperature as number)} ℃</MobileWidgetTitle>
      <MobileWidgetSubtitle>{currentWeather?.city}</MobileWidgetSubtitle>
    </MobileWidgetContainer>
  );

  return isMobileScreen ? mobileWidgetView : desktopWidgetView;
};

export default WeatherWidget;