import { useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/store.hooks';
import { generateFormActionButtons } from '../../../../../utils';
import {
  selectCurrentAnswer,
  selectCurrentQuestion,
  selectWorkoutsQuizQuestions,
  setFiftyFiftyChoice,
} from '../../../WorkoutsQuiz.slice';
import { quizHeaderActionButtonsConfig } from '../QuizHeader.configs';

type ReturnedHookType = {
  actionButtons: JSX.Element[];
  currentQuestion: number;
  progressBarValue: number;
  quizQuestionsLength: number;
};

export const useQuizHeader = (): ReturnedHookType => {
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);

  const dispatch = useAppDispatch();

  const progressBarValue = Math.round(((currentQuestion + 1) / quizQuestions.length) * 100);
  const isButtonDisabled = quizQuestions[currentQuestion]?.answers.length < 3 || Boolean(selectedCurrentAnswer);

  const onHandleFiftyFiftyChoice = useCallback((): void => {
    dispatch(setFiftyFiftyChoice());
  }, [dispatch]);

  const actionButtonsConfig = useMemo(
    () => quizHeaderActionButtonsConfig({ isButtonDisabled, onHandleFiftyFiftyChoice }),
    [isButtonDisabled, onHandleFiftyFiftyChoice]
  );

  const actionButtons = useMemo(() => generateFormActionButtons(actionButtonsConfig), [actionButtonsConfig]);

  return {
    actionButtons,
    currentQuestion,
    progressBarValue,
    quizQuestionsLength: quizQuestions.length,
  };
};
