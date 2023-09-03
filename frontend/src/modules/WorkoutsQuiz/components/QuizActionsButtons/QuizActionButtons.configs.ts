import { v4 as uuidv4 } from 'uuid';

import { QuizTimer, SelectedQuestionQuantity } from '../../WorkoutQuiz.enums';

export function quizQuestionsActionButtonsConfig(
  onNextQuestionButtonClick: () => void,
  onQuitButtonClick: () => void,
  selectedCurrentAnswer?: string
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
      order: 1,
      disabled: !selectedCurrentAnswer,
      onClick: onNextQuestionButtonClick,
    },
  ];
}

export const QUIZ_TIMER: Record<SelectedQuestionQuantity, QuizTimer> = {
  [SelectedQuestionQuantity.DefaultQuestionQuantity]: QuizTimer.OneMinute,
  [SelectedQuestionQuantity.FifteenQuestions]: QuizTimer.MinuteAndAHalf,
  [SelectedQuestionQuantity.TwentyQuestions]: QuizTimer.TwoMinutes,
  [SelectedQuestionQuantity.TwentyFiveQuestions]: QuizTimer.TwoMinutesAndHalf,
  [SelectedQuestionQuantity.ThirtyQuestions]: QuizTimer.ThreeMinutes,
  [SelectedQuestionQuantity.ThirtyFiveQuestions]: QuizTimer.ThreeMinutesAndHalf,
  [SelectedQuestionQuantity.FortyQuestions]: QuizTimer.FourMinutes,
};
