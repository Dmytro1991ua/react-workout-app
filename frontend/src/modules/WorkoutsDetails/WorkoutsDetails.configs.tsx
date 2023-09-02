import { v4 as uuidv4 } from 'uuid';

import { ActionButtonLabel } from './WorkoutsDetails.enums';
import { NextButtonIcon, PreviousButtonIcon } from './WorkoutsDetails.styled';
import { ActionButtonConfig, ActionButtonConfigProps } from './WorkoutsDetails.types';

export const actionButtonsConfig = ({
  isNextPage,
  isPreviousPage,
  pageCount,
  onGoToPage,
  onGoBackPage,
  onNextPage,
  onPreviousPage,
}: ActionButtonConfigProps): ActionButtonConfig[] => {
  return [
    {
      id: uuidv4(),
      backgroundColor: 'mantisDarker',
      color: 'white',
      hoverColor: 'mantis',
      icon: <PreviousButtonIcon />,
      disabled: !isPreviousPage,
      isButtonWithIcon: true,
      onClick: () => onGoBackPage(0),
    },
    {
      id: uuidv4(),
      backgroundColor: 'lighterBlue',
      color: 'white',
      hoverColor: 'darkGrey',
      label: ActionButtonLabel.PreviousPage,
      disabled: !isPreviousPage,
      onClick: () => onPreviousPage(),
    },
    {
      id: uuidv4(),
      backgroundColor: 'mantisDarker',
      color: 'white',
      hoverColor: 'mantis',
      label: ActionButtonLabel.NextPage,
      disabled: !isNextPage,
      onClick: () => onNextPage(),
    },
    {
      id: uuidv4(),
      backgroundColor: 'lighterBlue',
      color: 'white',
      hoverColor: 'darkGrey',
      icon: <NextButtonIcon />,
      disabled: !isNextPage,
      isButtonWithIcon: true,
      onClick: () => onGoToPage(pageCount - 1),
    },
  ];
};
