import { v4 as uuidv4 } from 'uuid';

import { AddToFavorite, EditBtn, RemoveBtn, RemoveFromFavorite, WeatherDetailsIcon } from '../../Workout.styled';
import { WorkoutActionConfig } from '../../Workout.types';
import { WorkoutHeaderConfigProps } from './WorkoutHeader.types';

export const workoutHeaderConfig = ({
  currentWeatherIcon,
  isWorkoutInFavorites,
  onAddingToFavorites,
  onOpenModal,
  onOpenWeatherInfoModal,
  onWorkoutEdit,
  workout,
}: WorkoutHeaderConfigProps): WorkoutActionConfig[] => {
  return [
    {
      id: uuidv4(),
      icon: isWorkoutInFavorites ? <RemoveFromFavorite /> : <AddToFavorite />,
      'data-tip': 'Add to favorite',
      'data-for': 'addToFavoriteButton',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onAddingToFavorites(workout._id ?? uuidv4());
      },
    },
    {
      id: uuidv4(),
      icon: <RemoveBtn />,
      'data-tip': 'Delete Workout',
      'data-for': 'deleteButton',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onOpenModal();
      },
    },
    {
      id: uuidv4(),
      icon: <EditBtn />,
      'data-tip': 'Edit Workout',
      'data-for': 'editButton',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onWorkoutEdit(workout._id ?? uuidv4());
      },
    },
    {
      id: uuidv4(),
      icon: workout.weatherInfo ? (
        <WeatherDetailsIcon
          src={currentWeatherIcon ?? ''}
          alt={currentWeatherIcon ? `${workout.weatherInfo?.city}'s city current weather icon` : ''}
        />
      ) : null,
      'data-tip': 'Workout weather details',
      'data-for': 'weatherIcon',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onOpenWeatherInfoModal();
      },
    },
  ];
};
