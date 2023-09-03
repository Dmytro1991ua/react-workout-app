import { FormActionButtonConfig } from '../../../../App.types';
import { ActionButtonsConfigProps } from './QuizHeader.types';

export const quizHeaderActionButtonsConfig = ({
  isButtonDisabled,
  onHandleFiftyFiftyChoice,
}: ActionButtonsConfigProps): FormActionButtonConfig[] => {
  return [
    {
      id: '50/50',
      backgroundColor: 'mantis',
      hoverColor: 'mantisDarker',
      color: 'white',
      onClick: onHandleFiftyFiftyChoice,
      disabled: isButtonDisabled,
      label: '50/50',
    },
  ];
};
