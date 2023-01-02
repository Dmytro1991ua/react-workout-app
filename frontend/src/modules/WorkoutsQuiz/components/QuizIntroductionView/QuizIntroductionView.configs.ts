import { v4 as uuidv4 } from 'uuid';

export function quizIntroductionActionButtonsConfig(
  onStartQuizButtonClick: () => void,
  onGoBackButtonClick: () => void
): QuizActionButton[] {
  return [
    {
      id: uuidv4(),
      backgroundColor: 'mantis',
      color: 'white',
      hoverColor: 'mantisDarker',
      label: 'Start Quiz',
      onClick: onStartQuizButtonClick,
    },
    {
      id: uuidv4(),
      backgroundColor: 'darkGrey',
      color: 'mantisDarker',
      hoverColor: 'lighterGrey',
      label: 'Back to Home page',
      onClick: onGoBackButtonClick,
    },
  ];
}
