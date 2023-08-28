import React, { ReactElement, useMemo } from 'react';

import CustomModal from '../../../../../../components/CustomModal/CustomModal';
import { Select } from '../../../../../../components/Select/Select';
import { SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS } from '../../../../Workouts.constants';
import { ModalContentSubtitle, ModalContentTitle } from '../../Workout.styled';
import { generateWorkoutActionButtons } from '../../Workout.utils';
import { useWorkoutActionPanel } from './hooks/useWorkoutActionPanel';
import { workoutActionsPanelConfig } from './WorkoutsActionsPanel.configs';
import { ActionsPanelWrapper, SelectWrapper } from './WorkoutsActionsPanel.styled';

interface WorkoutsActionsPanelProps {
  onShowAllWorkoutMarkers: () => void;
}

export const WorkoutsActionsPanel = ({ onShowAllWorkoutMarkers }: WorkoutsActionsPanelProps): ReactElement => {
  const {
    isDeleteConfirmationModalOpened,
    isSortedDefaultOptionDisabled,
    selectedValue,
    onCloseDeleteConfirmationModal,
    onDeleteAllWorkouts,
    onOpenDeleteConfirmationModal,
    onResetWorkoutSorting,
    onSortingByWorkoutTypeChange,
  } = useWorkoutActionPanel();

  const actionButtonsConfig = useMemo(
    () => workoutActionsPanelConfig({ onOpenDeleteConfirmationModal, onResetWorkoutSorting, onShowAllWorkoutMarkers }),
    [onOpenDeleteConfirmationModal, onResetWorkoutSorting, onShowAllWorkoutMarkers]
  );
  const actionButtons = useMemo(() => generateWorkoutActionButtons(actionButtonsConfig), [actionButtonsConfig]);

  return (
    <>
      <CustomModal
        isOpen={isDeleteConfirmationModalOpened}
        onClose={onCloseDeleteConfirmationModal}
        onSubmit={onDeleteAllWorkouts}
        shouldCloseOnOverlayClick
        title='Deletion of all workouts'
      >
        <ModalContentTitle>Are you sure you want to delete all workouts?</ModalContentTitle>
        <ModalContentSubtitle>You will not be able to recover them</ModalContentSubtitle>
      </CustomModal>
      <ActionsPanelWrapper>
        <SelectWrapper>
          <Select
            options={SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS}
            actionPanelSelect
            name=''
            optionLabel='Sort by workout type or indicator:'
            onChange={onSortingByWorkoutTypeChange}
            value={selectedValue}
            isDefaultOptionDisabled={isSortedDefaultOptionDisabled}
          />
        </SelectWrapper>
        {actionButtons}
      </ActionsPanelWrapper>
    </>
  );
};
