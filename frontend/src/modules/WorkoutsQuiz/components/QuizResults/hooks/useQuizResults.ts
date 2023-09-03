import { useCallback, useState } from 'react';

import { useAppDispatch } from '../../../../../store/store.hooks';
import { loadAvailableWorkoutsQuizQuestionsAction } from '../../../WorkoutsQuiz.actions';
import { clearWorkoutQuiz, setQuestionQuantity, setTryQuizAgain } from '../../../WorkoutsQuiz.slice';
import { QuizResultsProps } from '../QuizResults';

type HookReturnedType = {
  isQuestionQuantityDefaultOptionDisabled: boolean;
  onTryAgainButtonClick: () => void;
  onQuitButtonClick: () => void;
  onQuestionQuantityChange: (value: string) => void;
};

export const useQuizResults = ({ onIsStartQuizButtonClicked }: QuizResultsProps): HookReturnedType => {
  const dispatch = useAppDispatch();

  const [isQuestionQuantityDefaultOptionDisabled, setIsQuestionQuantityDefaultOptionDisabled] =
    useState<boolean>(false);

  const onTryAgainButtonClick = useCallback((): void => {
    dispatch(setTryQuizAgain());
    dispatch(loadAvailableWorkoutsQuizQuestionsAction());

    setIsQuestionQuantityDefaultOptionDisabled(false);
  }, [dispatch]);

  const onQuitButtonClick = useCallback((): void => {
    onIsStartQuizButtonClicked(false);
    dispatch(clearWorkoutQuiz());

    setIsQuestionQuantityDefaultOptionDisabled(false);
  }, [dispatch, onIsStartQuizButtonClicked]);

  const onQuestionQuantityChange = useCallback(
    (value: string): void => {
      dispatch(setQuestionQuantity(value));
      setIsQuestionQuantityDefaultOptionDisabled(true);
    },
    [dispatch]
  );

  return {
    isQuestionQuantityDefaultOptionDisabled,
    onTryAgainButtonClick,
    onQuitButtonClick,
    onQuestionQuantityChange,
  };
};
