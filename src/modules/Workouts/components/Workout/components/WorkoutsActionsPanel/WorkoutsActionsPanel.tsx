import React, { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CustomModal from '../../../../../../components/CustomModal/CustomModal';
import { Select } from '../../../../../../components/Select/Select';
import Tooltip from '../../../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../../../global-styles/ColorsPalette';
import { toastService } from '../../../../../../services/Toast.service';
import { useAppDispatch, useAppSelector } from '../../../../../../store/store.hooks';
import { SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS_MOCK } from '../../../../Workouts.constants';
import { SortedWorkoutsSelectOption } from '../../../../Workouts.enums';
import {
  selectSortedWorkoutsSelectOption,
  setDeleteAllWorkouts,
  setSortedWorkoutsSelectOption,
} from '../../../../Workouts.slice';
import { ModalContentSubtitle, ModalContentTitle } from '../../Workout.styled';

import {
  ActionButton,
  ActionsPanelWrapper,
  ResetButtonIcon,
  DeleteButtonIcon,
  ShowAllMarkers,
} from './WorkoutsActionsPanel.styled';

interface WorkoutsActionsPanelProps {
  handleShowAllWorkoutMarkers: () => void;
}

export const WorkoutsActionsPanel = ({ handleShowAllWorkoutMarkers }: WorkoutsActionsPanelProps): ReactElement => {
  const dispatch = useAppDispatch();

  const sortedWorkoutsSelectOption = useAppSelector(selectSortedWorkoutsSelectOption);

  const [isSortedDefaultOptionDisabled, setIsSortedDefaultOptionDisabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SortedWorkoutsSelectOption>(sortedWorkoutsSelectOption);
  const [isDeleteConfirmationModalOpened, setIsDeleteConfirmationModalOpened] = useState(false);

  const ACTIONS_PANEL_CONFIG = [
    {
      id: uuidv4(),
      icon: <ResetButtonIcon />,
      'data-tip': 'Reset Workout Sorting',
      'data-for': 'clearButton',
      onClick: handleResetWorkoutSorting,
    },
    {
      id: uuidv4(),
      icon: <ShowAllMarkers />,
      'data-tip': 'Show all markers',
      'data-for': 'showAllMarkersButton',
      onClick: handleShowAllWorkoutMarkers,
    },
    {
      id: uuidv4(),
      icon: <DeleteButtonIcon />,
      'data-tip': 'Delete All',
      'data-for': 'deleteButton',
      onClick: handleOpenDeleteConfirmationModal,
    },
  ];

  function removeEmojiAndSpaceFromSelectedValue(selectedValue: string): string {
    return selectedValue
      .replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
      .replaceAll('/', '')
      .trim();
  }

  function handleSortingByWorkoutTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = removeEmojiAndSpaceFromSelectedValue(event.target.value);

    dispatch(setSortedWorkoutsSelectOption(selectedValue as SortedWorkoutsSelectOption));

    setIsSortedDefaultOptionDisabled(true);
    setSelectedValue(event.target.value as SortedWorkoutsSelectOption);
  }

  function handleResetWorkoutSorting(): void {
    dispatch(setSortedWorkoutsSelectOption(SortedWorkoutsSelectOption.Default));

    setIsSortedDefaultOptionDisabled(false);
    setSelectedValue(SortedWorkoutsSelectOption.Default);
  }

  function handleDeleteAllWorkouts(): void {
    dispatch(setDeleteAllWorkouts());
    dispatch(setSortedWorkoutsSelectOption(SortedWorkoutsSelectOption.Default));
    toastService.success('All workouts were successfully deleted');
  }

  function handleOpenDeleteConfirmationModal(): void {
    setIsDeleteConfirmationModalOpened(true);
  }

  function handleCloseDeleteConfirmationModal(): void {
    setIsDeleteConfirmationModalOpened(false);
  }

  return (
    <>
      <CustomModal
        isOpen={isDeleteConfirmationModalOpened}
        onClose={handleCloseDeleteConfirmationModal}
        onSubmit={handleDeleteAllWorkouts}
        shouldCloseOnOverlayClick
        title='Deletion of all workouts'
      >
        <ModalContentTitle>Are you sure you want to delete all workouts?</ModalContentTitle>
        <ModalContentSubtitle>You will not be able to recover them</ModalContentSubtitle>
      </CustomModal>
      <ActionsPanelWrapper>
        <Select
          options={SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS_MOCK}
          actionPanelSelect
          name=''
          optionLabel='Sort by workout type or indicator:'
          onChange={handleSortingByWorkoutTypeChange}
          value={selectedValue}
          isDefaultOptionDisabled={isSortedDefaultOptionDisabled}
        />
        {ACTIONS_PANEL_CONFIG.map((item) => {
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
      </ActionsPanelWrapper>
    </>
  );
};
