import React, { ReactElement, useState } from 'react';

import { loadAvailableWorkoutsQuizQuestionsAction } from '../../WorkoutsQuiz.actions';
import { clearWorkoutQuiz, setQuestionQuantity, setTryQuizAgain } from '../../WorkoutsQuiz.slice';
import QuizResultsActionButtons from '../QuizResultsActionButtons/QuizResultsActionButtons';
import QuizResultsHeader from '../QuizResultsHeader/QuizResultsHeader';
import QuizResultsTable from '../QuizResultsTable/QuizResultsTable';
import { useAppDispatch } from './../../../../store/store.hooks';
import { QuizResultSection } from './QuizResult.styled';

interface QuizResultsProps {
  onIsStartQuizButtonClicked: (value: boolean) => void;
}

const QuizResults = React.memo(({ onIsStartQuizButtonClicked }: QuizResultsProps): ReactElement => {
  const dispatch = useAppDispatch();

  const [isQuestionQuantityDefaultOptionDisabled, setIsQuestionQuantityDefaultOptionDisabled] =
    useState<boolean>(false);

  function handleTryAgainButtonClick(): void {
    dispatch(setTryQuizAgain());
    dispatch(loadAvailableWorkoutsQuizQuestionsAction());

    setIsQuestionQuantityDefaultOptionDisabled(false);
  }

  function handleQuitButtonClick(): void {
    onIsStartQuizButtonClicked(false);
    dispatch(clearWorkoutQuiz());

    setIsQuestionQuantityDefaultOptionDisabled(false);
  }

  function handleQuestionQuantityChange(value: string): void {
    dispatch(setQuestionQuantity(value));
    setIsQuestionQuantityDefaultOptionDisabled(true);
  }

  return (
    <QuizResultSection>
      <QuizResultsHeader />
      <QuizResultsTable />
      <QuizResultsActionButtons
        onTryAgainButtonClick={handleTryAgainButtonClick}
        onQuitButtonClick={handleQuitButtonClick}
        onHandleQuestionQuantityChange={handleQuestionQuantityChange}
        isQuestionQuantityDefaultOptionDisabled={isQuestionQuantityDefaultOptionDisabled}
      />
    </QuizResultSection>
  );
});

export default QuizResults;
