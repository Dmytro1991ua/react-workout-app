import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { kelvinToCelsius, timestampToDateString } from '../../../../Workouts.utils';
import { WeatherDetailsTable, WeatherDetailsTableItem } from './WorkoutWeatherDetails.styled';

interface WeatherDetailsItem {
  id: string;
  title: string;
  subtitle: string;
}

interface WorkoutWeatherDetailsProps {
  workoutWeatherDetails: CurrentWeatherData | null;
}

const WorkoutWeatherDetails = ({ workoutWeatherDetails }: WorkoutWeatherDetailsProps) => {
  const WEATHER_DETAILS_MODAL_CONFIG: WeatherDetailsItem[] = [
    {
      id: uuidv4(),
      title: 'City',
      subtitle: `${workoutWeatherDetails?.city}, ${workoutWeatherDetails?.countryInfo.country}`,
    },
    {
      id: uuidv4(),
      title: 'Temperature',
      subtitle: `${kelvinToCelsius(workoutWeatherDetails?.temperature as number)} ℃`,
    },
    {
      id: uuidv4(),
      title: 'Feels Like',
      subtitle: `${kelvinToCelsius(workoutWeatherDetails?.feelsLike as number)} ℃`,
    },
    {
      id: uuidv4(),
      title: 'Weather Description',
      subtitle: `${workoutWeatherDetails?.weatherInfo[0].description}`,
    },
    {
      id: uuidv4(),
      title: 'Sunrise',
      subtitle: `${timestampToDateString(workoutWeatherDetails?.countryInfo?.sunrise as number)}`,
    },
    {
      id: uuidv4(),
      title: 'Sunset',
      subtitle: `${timestampToDateString(workoutWeatherDetails?.countryInfo?.sunset as number)}`,
    },
    {
      id: uuidv4(),
      title: 'Humidity',
      subtitle: `${workoutWeatherDetails?.humidity as number} %`,
    },
    {
      id: uuidv4(),
      title: 'Air Pressure',
      subtitle: `${workoutWeatherDetails?.pressure} hPa`,
    },
  ];

  return (
    <WeatherDetailsTable>
      <tbody>
        {WEATHER_DETAILS_MODAL_CONFIG.map((item) => (
          <tr key={item.id}>
            <WeatherDetailsTableItem>{item.title}</WeatherDetailsTableItem>
            <WeatherDetailsTableItem>
              <span style={{ textTransform: 'capitalize' }}>{item.subtitle}</span>
            </WeatherDetailsTableItem>
          </tr>
        ))}
      </tbody>
    </WeatherDetailsTable>
  );
};
export default WorkoutWeatherDetails;
