import React from 'react';

interface WeatherWidgetProps {
  currentWeather: CurrentWeatherData | null;
}

const WeatherWidget = ({ currentWeather }: WeatherWidgetProps) => {
  return <div>{currentWeather?.city}</div>;
};

export default WeatherWidget;
