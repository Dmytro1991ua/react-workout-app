import React, { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Select } from '../../../../components/Select/Select';
import Tooltip from '../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../global-styles/ColorsPalette';
import {
  SORT_BY_WORKOUT_INDICATORS_SELECTION_OPTIONS_MOCK,
  SORT_BY_WORKOUT_TYPE_SELECTION_OPTIONS_MOCK,
} from '../../Workouts.constants';

import { ActionButton, ActionsPanelWrapper, ClearAllButtonIcon, DeleteButtonIcon } from './WorkoutsActionsPanel.styled';

export const WorkoutsActionsPanel = (): ReactElement => {
  const config = [
    {
      id: uuidv4(),
      icon: <DeleteButtonIcon />,
      'data-tip': 'Delete All',
      'data-for': 'deleteButton',
    },
    {
      id: uuidv4(),
      icon: <ClearAllButtonIcon />,
      'data-tip': 'Clear All',
      'data-for': 'clearButton',
    },
  ];

  return (
    <ActionsPanelWrapper>
      <Select
        options={SORT_BY_WORKOUT_TYPE_SELECTION_OPTIONS_MOCK}
        actionPanelSelect
        optionLabel='Sort by workout type:'
      />
      <Select
        options={SORT_BY_WORKOUT_INDICATORS_SELECTION_OPTIONS_MOCK}
        actionPanelSelect
        optionLabel='Sort by workout indicators:'
      />
      {config.map((item) => {
        return (
          <li key={item.id}>
            <ActionButton data-tip={item['data-tip']} data-for={item['data-for']}>
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
