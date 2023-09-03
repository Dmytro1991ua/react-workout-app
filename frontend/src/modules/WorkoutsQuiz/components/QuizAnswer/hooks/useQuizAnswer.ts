import { useCallback } from 'react';

import { useAppSelector } from '../../../../../store/store.hooks';
import { selectCorrectAnswerBasedOnIsCorrectProperty, selectCurrentAnswer } from '../../../WorkoutsQuiz.slice';
import { QuizAnswerProps } from './../QuizAnswer';

type HookReturnedType = {
  isAnswerCorrect: boolean;
  isAnswerWrong: boolean;
  selectedCurrentAnswer: string;
  onHandleAnswerClick: () => void;
};

export const useQuizAnswer = ({ answer, onAnswerClick }: QuizAnswerProps): HookReturnedType => {
  const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);
  const correctAnswer = useAppSelector(selectCorrectAnswerBasedOnIsCorrectProperty);

  const isAnswerCorrect = (selectedCurrentAnswer && answer.answerOption === correctAnswer) as boolean;
  const isAnswerWrong = (selectedCurrentAnswer === answer.answerOption &&
    selectedCurrentAnswer !== correctAnswer) as boolean;

  const onHandleAnswerClick = useCallback(
    () => onAnswerClick(answer.answerOption),
    [answer.answerOption, onAnswerClick]
  );

  return {
    isAnswerCorrect,
    isAnswerWrong,
    selectedCurrentAnswer,
    onHandleAnswerClick,
  };
};
