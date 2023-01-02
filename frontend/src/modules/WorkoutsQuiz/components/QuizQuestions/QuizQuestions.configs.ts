import { v4 as uuidv4 } from 'uuid';

export function quizQuestionsActionButtonsConfig(
  onNextQuestionButtonClick: () => void,
  onQuitButtonClick: () => void
): QuizActionButton[] {
  return [
    {
      id: uuidv4(),
      backgroundColor: 'tomato',
      color: 'white',
      hoverColor: 'error',
      label: 'Quit',
      onClick: onQuitButtonClick,
    },
    {
      id: uuidv4(),
      backgroundColor: 'mantis',
      color: 'white',
      hoverColor: 'mantisDarker',
      label: 'Next Question',
      onClick: onNextQuestionButtonClick,
    },
  ];
}
