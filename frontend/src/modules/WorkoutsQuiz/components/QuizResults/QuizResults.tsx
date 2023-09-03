import React, { ReactElement } from 'react';

import QuizResultsActionButtons from '../QuizResultsActionButtons/QuizResultsActionButtons';
import QuizResultsHeader from '../QuizResultsHeader/QuizResultsHeader';
import QuizResultsTable from '../QuizResultsTable/QuizResultsTable';
import { useQuizResults } from './hooks/useQuizResults';
import { QuizResultSection } from './QuizResults.styled';

export interface QuizResultsProps {
  onIsStartQuizButtonClicked: (value: boolean) => void;
}

const QuizResults = React.memo(({ onIsStartQuizButtonClicked }: QuizResultsProps): ReactElement => {
  const {
    isQuestionQuantityDefaultOptionDisabled,
    onQuestionQuantityChange,
    onQuitButtonClick,
    onTryAgainButtonClick,
  } = useQuizResults({ onIsStartQuizButtonClicked });

  return (
    <QuizResultSection>
      <QuizResultsHeader />
      <QuizResultsTable />
      <QuizResultsActionButtons
        onTryAgainButtonClick={onTryAgainButtonClick}
        onQuitButtonClick={onQuitButtonClick}
        onQuestionQuantityChange={onQuestionQuantityChange}
        isQuestionQuantityDefaultOptionDisabled={isQuestionQuantityDefaultOptionDisabled}
      />
    </QuizResultSection>
  );
});

export default QuizResults;
