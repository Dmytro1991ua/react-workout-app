import { v4 as uuidv4 } from 'uuid';

import { WorkoutActionConfig } from '../../Workout.types';
import { WorkoutActionsPanelConfigProps } from './WorkoutActionsPanel.types';
import { DeleteButtonIcon, ResetButtonIcon, ShowAllMarkers } from './WorkoutsActionsPanel.styled';

export const workoutActionsPanelConfig = ({
  onOpenDeleteConfirmationModal,
  onResetWorkoutSorting,
  onShowAllWorkoutMarkers,
}: WorkoutActionsPanelConfigProps): WorkoutActionConfig[] => {
  return [
    {
      id: uuidv4(),
      icon: <ResetButtonIcon />,
      'data-tip': 'Reset Workout Sorting',
      'data-for': 'clearButton',
      onClick: onResetWorkoutSorting,
    },
    {
      id: uuidv4(),
      icon: <ShowAllMarkers />,
      'data-tip': 'Show all markers',
      'data-for': 'showAllMarkersButton',
      onClick: onShowAllWorkoutMarkers,
    },
    {
      id: uuidv4(),
      icon: <DeleteButtonIcon />,
      'data-tip': 'Delete All',
      'data-for': 'deleteButton',
      onClick: onOpenDeleteConfirmationModal,
    },
  ];
};
