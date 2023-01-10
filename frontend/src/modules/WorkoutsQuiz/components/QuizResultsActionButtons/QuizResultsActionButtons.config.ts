import { v4 as uuidv4 } from 'uuid';

export function quizResultsActionButtonsConfig(
  onTryAgainButtonClick: () => void,
  onQuitButtonClick: () => void
): QuizActionButton[] {
  return [
    {
      id: uuidv4(),
      backgroundColor: 'mantis',
      color: 'white',
      hoverColor: 'mantisDarker',
      label: 'Try Again',
      onClick: onTryAgainButtonClick,
    },
    {
      id: uuidv4(),
      backgroundColor: 'tomato',
      color: 'white',
      hoverColor: 'error',
      label: 'Quit',
      onClick: onQuitButtonClick,
    },
  ];
}
