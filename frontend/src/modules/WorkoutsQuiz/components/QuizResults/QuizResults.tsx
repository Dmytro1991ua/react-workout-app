import React, { ReactElement } from 'react';

import { loadAvailableWorkoutsQuizQuestionsAction } from '../../WorkoutsQuiz.actions';
import { clearWorkoutQuiz, setTryQuizAgain } from '../../WorkoutsQuiz.slice';
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

  function handleTryAgainButtonClick(): void {
    dispatch(setTryQuizAgain());
    dispatch(loadAvailableWorkoutsQuizQuestionsAction());
  }
  function handleQuitButtonClick(): void {
    onIsStartQuizButtonClicked(false);
    dispatch(clearWorkoutQuiz());
  }

  return (
    <QuizResultSection>
      <QuizResultsHeader />
      <QuizResultsTable />
      <QuizResultsActionButtons
        onTryAgainButtonClick={handleTryAgainButtonClick}
        onQuitButtonClick={handleQuitButtonClick}
      />
    </QuizResultSection>
  );
});

export default QuizResults;
