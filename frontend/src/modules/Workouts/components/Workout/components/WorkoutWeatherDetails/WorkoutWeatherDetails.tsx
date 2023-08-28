import React, { useMemo } from 'react';

import { WeatherDetailsTable } from './WorkoutWeatherDetails.styled';
import { generateWorkoutWeatherDetails } from './WorkoutWeatherDetails.utils';

interface WorkoutWeatherDetailsProps {
  workoutWeatherDetails: CurrentWeatherData | null;
}

const WorkoutWeatherDetails = ({ workoutWeatherDetails }: WorkoutWeatherDetailsProps): JSX.Element => {
  const weatherDetails = useMemo(() => generateWorkoutWeatherDetails(workoutWeatherDetails), [workoutWeatherDetails]);

  return (
    <WeatherDetailsTable>
      <tbody>{weatherDetails}</tbody>
    </WeatherDetailsTable>
  );
};
export default WorkoutWeatherDetails;
