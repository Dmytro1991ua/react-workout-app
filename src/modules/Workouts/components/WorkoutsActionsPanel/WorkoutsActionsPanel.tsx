import React, { ReactElement, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Select } from '../../../../components/Select/Select';
import Tooltip from '../../../../components/Tooltip/Tooltip';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { colors } from '../../../../global-styles/ColorsPalette';
import { toastService } from '../../../../services/Toast.service';
import { SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS_MOCK } from '../../Workouts.constants';
import { SortedWorkoutsByWorkoutTypeAndIndicator } from '../../Workouts.enums';

import { ActionButton, ActionsPanelWrapper, ResetButtonIcon, DeleteButtonIcon } from './WorkoutsActionsPanel.styled';

export const WorkoutsActionsPanel = (): ReactElement => {
  const { selectedWorkoutTypeValueAndIndicator } = useContext(WorkoutsContext);
  const [sortedByWorkoutTypeValueAndIndicator, setSortedByWorkoutTypeValueAndIndicator] =
    selectedWorkoutTypeValueAndIndicator;

  const [isDefaultOptionDisabled, setIsDefaultOptionDisabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState<SortedWorkoutsByWorkoutTypeAndIndicator>(
    SortedWorkoutsByWorkoutTypeAndIndicator.Default
  );

  const config = [
    {
      id: uuidv4(),
      icon: <ResetButtonIcon />,
      'data-tip': 'Reset Workout Sorting',
      'data-for': 'clearButton',
      onClick: handleResetWorkoutSorting,
    },
    {
      id: uuidv4(),
      icon: <DeleteButtonIcon />,
      'data-tip': 'Delete All',
      'data-for': 'deleteButton',
      onClick: handleDeleteAllWorkouts,
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

    setSortedByWorkoutTypeValueAndIndicator(selectedValue as SortedWorkoutsByWorkoutTypeAndIndicator);

    setIsDefaultOptionDisabled(true);
    setSelectedValue(event.target.value as SortedWorkoutsByWorkoutTypeAndIndicator);
  }

  function handleResetWorkoutSorting(): void {
    setSortedByWorkoutTypeValueAndIndicator(SortedWorkoutsByWorkoutTypeAndIndicator.Default);

    setIsDefaultOptionDisabled(false);
    setSelectedValue(SortedWorkoutsByWorkoutTypeAndIndicator.Default);
  }

  function handleDeleteAllWorkouts(): void {
    toastService.info('Will be implemented later on');
  }

  return (
    <ActionsPanelWrapper>
      <Select
        options={SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS_MOCK}
        actionPanelSelect
        optionLabel='Sort by workout type or indicator:'
        onChange={handleSortingByWorkoutTypeChange}
        value={selectedValue}
        isDefaultOptionDisabled={isDefaultOptionDisabled}
      />
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
    </ActionsPanelWrapper>
  );
};
