import { useMemo } from 'react';

import { useAppSelector } from '../../../../../store/store.hooks';
import { SelectedQuestionQuantity } from '../../../WorkoutQuiz.enums';
import {
  selectCurrentAnswer,
  selectSelectedQuestionQuantity,
  selectWorkoutsQuizQuestions,
} from '../../../WorkoutsQuiz.slice';
import { QUIZ_TIMER } from '../QuizActionButtons.configs';
import { timeFormatter } from '../QuizActionsButtons.utils';
import { useCountDown } from './useCountDown';

type HookProps = {
  onQuizReset: () => void;
};

type HookReturnedType = {
  selectedCurrentAnswer: string;
  quizQuestions: WorkoutQuiz[];
  isTimerLessThanFifteenSeconds: boolean;
  timer: string;
};

export const useQuizActionsButtons = ({ onQuizReset }: HookProps): HookReturnedType => {
  const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);
  const selectedQuestionQuantity = useAppSelector(selectSelectedQuestionQuantity);

  const { countDown } = useCountDown({
    seconds: QUIZ_TIMER[selectedQuestionQuantity as SelectedQuestionQuantity],
    onQuizReset,
  });

  const isTimerLessThanFifteenSeconds = countDown < 15;

  const timer = useMemo(() => timeFormatter(countDown), [countDown]);

  return {
    selectedCurrentAnswer,
    quizQuestions,
    isTimerLessThanFifteenSeconds,
    timer,
  };
};
