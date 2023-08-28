import { v4 as uuidv4 } from 'uuid';

import { kelvinToCelsius, timestampToDateString } from '../../../../Workouts.utils';
import { WeatherDetailsItem } from './WorkoutWeatherDetails.types';

export const workoutWeatherDetailsConfig = (workoutWeatherDetails: CurrentWeatherData | null): WeatherDetailsItem[] => {
  return [
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
};
