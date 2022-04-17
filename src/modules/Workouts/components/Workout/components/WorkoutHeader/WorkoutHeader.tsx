import React, { ReactElement } from 'react';

import { EditBtn, RemoveBtn, WorkoutTitle, Header } from './../../Workout.styled';

interface WorkoutHeaderProps {
  description?: string;
  onOpenModal: () => void;
  onWorkoutEdit: (id: string) => void;
  workout: WorkoutItem;
}

const WorkoutHeader = ({ description, onOpenModal, onWorkoutEdit, workout }: WorkoutHeaderProps): ReactElement => {
  return (
    <Header>
      <WorkoutTitle>{description}</WorkoutTitle>
      <div>
        <RemoveBtn onClick={onOpenModal} />
        <EditBtn onClick={() => onWorkoutEdit(workout.id)} />
      </div>
    </Header>
  );
};

export default WorkoutHeader;
