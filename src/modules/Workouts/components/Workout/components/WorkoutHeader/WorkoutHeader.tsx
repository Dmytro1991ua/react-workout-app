import React, { ReactElement } from 'react';

import { EditBtn, RemoveBtn, WorkoutTitle, Header } from './../../Workout.styled';

interface WorkoutHeaderProps {
  description?: string;
  onWorkoutDelete: () => void;
  onWorkoutEdit: () => void;
}

const WorkoutHeader = ({ description, onWorkoutDelete, onWorkoutEdit }: WorkoutHeaderProps): ReactElement => {
  return (
    <Header>
      <WorkoutTitle>{description}</WorkoutTitle>
      <div>
        <RemoveBtn onClick={onWorkoutDelete} />
        <EditBtn onClick={onWorkoutEdit} />
      </div>
    </Header>
  );
};

export default WorkoutHeader;
