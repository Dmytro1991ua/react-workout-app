import React, { ReactElement } from 'react';

import { EditBtn, RemoveBtn, WorkoutTitle, Header } from './../../Workout.styled';

interface WorkoutHeaderProps {
  description?: string;
  onOpenModal: () => void;
  onWorkoutEdit: () => void;
}

const WorkoutHeader = ({ description, onOpenModal, onWorkoutEdit }: WorkoutHeaderProps): ReactElement => {
  return (
    <Header>
      <WorkoutTitle>{description}</WorkoutTitle>
      <div>
        <RemoveBtn onClick={onOpenModal} />
        <EditBtn onClick={onWorkoutEdit} />
      </div>
    </Header>
  );
};

export default WorkoutHeader;
