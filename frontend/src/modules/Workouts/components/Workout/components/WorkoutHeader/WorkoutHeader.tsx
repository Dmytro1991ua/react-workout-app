import React, { ReactElement, useMemo } from 'react';

import { generateWorkoutActionButtons } from '../../Workout.utils';
import { Header, WorkoutTitle } from './../../Workout.styled';
import { useWorkoutHeader } from './hooks/useWorkoutHeader';
import { workoutHeaderConfig } from './WorkoutHeader.config';

interface WorkoutHeaderProps {
  onOpenModal: () => void;
  onOpenWeatherInfoModal: () => void;
  onWorkoutEdit: (id: string) => void;
  onAddingToFavorites: (id: string) => void;
  workout: WorkoutItem;
}

const WorkoutHeader = ({
  onOpenModal,
  onWorkoutEdit,
  workout,
  onAddingToFavorites,
  onOpenWeatherInfoModal,
}: WorkoutHeaderProps): ReactElement => {
  const { currentWeatherIcon, isWorkoutInFavorites } = useWorkoutHeader({ workout });

  const actionButtonsConfig = useMemo(
    () =>
      workoutHeaderConfig({
        currentWeatherIcon,
        isWorkoutInFavorites,
        onAddingToFavorites,
        onOpenModal,
        onOpenWeatherInfoModal,
        onWorkoutEdit,
        workout,
      }),
    [
      currentWeatherIcon,
      isWorkoutInFavorites,
      onAddingToFavorites,
      onOpenModal,
      onOpenWeatherInfoModal,
      onWorkoutEdit,
      workout,
    ]
  );

  const workoutHeader = useMemo(() => generateWorkoutActionButtons(actionButtonsConfig), [actionButtonsConfig]);

  return (
    <Header>
      <WorkoutTitle>{workout?.description}</WorkoutTitle>
      {workoutHeader}
    </Header>
  );
};

export default WorkoutHeader;
