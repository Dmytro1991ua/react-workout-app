import { workoutWeatherDetailsConfig } from './WorkoutWeatherDetails.config';
import { WeatherDetailsTableItem } from './WorkoutWeatherDetails.styled';

export const generateWorkoutWeatherDetails = (workoutWeatherDetails: CurrentWeatherData | null): JSX.Element[] => {
  const weatherDetailsConfig = workoutWeatherDetailsConfig(workoutWeatherDetails);

  return weatherDetailsConfig.map((item) => (
    <tr key={item.id}>
      <WeatherDetailsTableItem>{item.title}</WeatherDetailsTableItem>
      <WeatherDetailsTableItem>
        <span style={{ textTransform: 'capitalize' }}>{item.subtitle}</span>
      </WeatherDetailsTableItem>
    </tr>
  ));
};
