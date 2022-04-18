import React, { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tooltip from '../../../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../../../global-styles/ColorsPalette';
import { ActionButton } from '../../../WorkoutsActionsPanel/WorkoutsActionsPanel.styled';

import { EditBtn, RemoveBtn, WorkoutTitle, Header, AddToFavorite, RemoveFromFavorite } from './../../Workout.styled';

interface WorkoutHeaderProps {
  description?: string;
  onOpenModal: () => void;
  onWorkoutEdit: (id: string) => void;
  onAddingToFavorites: (id: string) => void;
  workout: WorkoutItem;
}

const WorkoutHeader = ({
  description,
  onOpenModal,
  onWorkoutEdit,
  workout,
  onAddingToFavorites,
}: WorkoutHeaderProps): ReactElement => {
  const isWorkoutInFavorites = workout.isFavorite === true;

  const config = [
    {
      id: uuidv4(),
      icon: isWorkoutInFavorites ? <RemoveFromFavorite /> : <AddToFavorite />,
      'data-tip': 'Add to favorite',
      'data-for': 'addToFavoriteButton',
      onClick: () => onAddingToFavorites(workout.id),
    },
    {
      id: uuidv4(),
      icon: <RemoveBtn />,
      'data-tip': 'Delete Workout',
      'data-for': 'deleteButton',
      onClick: onOpenModal,
    },
    {
      id: uuidv4(),
      icon: <EditBtn />,
      'data-tip': 'Edit Workout',
      'data-for': 'editButton',
      onClick: () => onWorkoutEdit(workout.id),
    },
  ];

  return (
    <Header>
      <WorkoutTitle>{description}</WorkoutTitle>
      {config.map((item) => {
        return (
          <li key={item.id}>
            <ActionButton data-tip={item['data-tip']} data-for={item['data-for']} onClick={item.onClick}>
              {item.icon}
            </ActionButton>
            <Tooltip
              id={item['data-for']}
              effect='solid'
              backgroundColor={colors.mantisDarker}
              textColor={colors.darkBlue}
              border={true}
              borderColor={colors.white}
              arrowColor={colors.mantisDarker}
              place='top'
              offset={{ top: 100, left: 10 }}
            />
          </li>
        );
      })}
    </Header>
  );
};

export default WorkoutHeader;
