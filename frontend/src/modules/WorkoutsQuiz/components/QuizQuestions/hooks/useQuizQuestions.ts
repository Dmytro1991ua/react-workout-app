import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/store.hooks';
import { selectIsUserAuthenticated } from '../../../../Auth/User.slice';
import { loadAvailableWorkoutsQuizQuestionsAction } from '../../../WorkoutsQuiz.actions';
import {
  clearWorkoutQuiz,
  selectAreQuizQuestionsLoading,
  selectIsQuizResultsShown,
  selectWorkoutsQuizQuestions,
  setClearQuestionQuantity,
  setCurrentQuestion,
  setSelectedAnswerOption,
} from '../../../WorkoutsQuiz.slice';
import { QuizQuestionsProps } from '../QuizQuestions';

type HookReturnedType = {
  isLoading: boolean;
  isQuizResultsShown: boolean;
  quizQuestionsLength: number;
  onNextQuestionButtonClick: () => void;
  onQuizReset: () => void;
  onAnswerClick: (answerOption: string) => void;
};

export const useQuizQuestions = ({ onIsStartQuizButtonClicked }: QuizQuestionsProps): HookReturnedType => {
  const isLoading = useAppSelector(selectAreQuizQuestionsLoading);
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const isQuizResultsShown = useAppSelector(selectIsQuizResultsShown);
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserAuthenticated) {
      dispatch(loadAvailableWorkoutsQuizQuestionsAction());
    }
  }, [dispatch, isUserAuthenticated]);

  const onNextQuestionButtonClick = useCallback((): void => {
    dispatch(setCurrentQuestion());
    dispatch(setClearQuestionQuantity());
  }, [dispatch]);

  const onQuizReset = useCallback((): void => {
    onIsStartQuizButtonClicked(false);
    dispatch(clearWorkoutQuiz());
  }, [dispatch, onIsStartQuizButtonClicked]);

  const onAnswerClick = useCallback(
    (answerOption: string): void => {
      dispatch(setSelectedAnswerOption(answerOption));
    },
    [dispatch]
  );

  return {
    isLoading,
    isQuizResultsShown,
    quizQuestionsLength: quizQuestions.length,
    onNextQuestionButtonClick,
    onQuizReset,
    onAnswerClick,
  };
};
