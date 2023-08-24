import React, { ReactElement } from 'react';

import { kelvinToCelsius } from '../../../Workouts/Workouts.utils';
import { useWeatherWidget } from './hooks/useWeatherWidget';
import {
  CityWeatherLabel,
  CityWeatherLabelWrapper,
  MobileWidgetContainer,
  MobileWidgetSubtitle,
  MobileWidgetTitle,
  WeatherIcon,
  WeatherTemperature,
  WeatherWidgetTop,
  WeatherWidgetWrapper,
} from './WeatherWidget.styled';
interface WeatherWidgetProps {
  currentWeather: CurrentWeatherData | null;
}

const WeatherWidget = ({ currentWeather }: WeatherWidgetProps): ReactElement => {
  const { currentWeatherIcon, isMobileScreen, timeValue } = useWeatherWidget({ currentWeather });

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
