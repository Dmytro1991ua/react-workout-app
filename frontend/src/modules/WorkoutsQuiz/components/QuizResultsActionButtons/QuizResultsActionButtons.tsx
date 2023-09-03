import React, { ReactElement } from 'react';

import { QUIZ_QUESTIONS_OPTIONS } from '../../WorkoutQuiz.constants';
import { ActionButtonsWrapper } from '../QuizQuestions/QuizQuestions.styled';
import { Select } from './../../../../components/Select/Select';
import { useQuizResultsActionButtons } from './hooks/useQuizResultsActionButtons';

export interface QuizResultsActionsProps {
  isQuestionQuantityDefaultOptionDisabled: boolean;
  onTryAgainButtonClick: () => void;
  onQuitButtonClick: () => void;
  onQuestionQuantityChange: (value: string) => void;
}

const QuizResultsActionButtons = React.memo(
  ({
    isQuestionQuantityDefaultOptionDisabled,
    onTryAgainButtonClick,
    onQuitButtonClick,
    onQuestionQuantityChange,
  }: QuizResultsActionsProps): ReactElement => {
    const { quizResultsActionButtons, questionQuantity } = useQuizResultsActionButtons({
      onQuitButtonClick,
      onTryAgainButtonClick,
    });

    return (
      <>
        <ActionButtonsWrapper $isQuizResult>{quizResultsActionButtons}</ActionButtonsWrapper>
        <Select
          options={QUIZ_QUESTIONS_OPTIONS}
          actionPanelSelect
          name=''
          value={questionQuantity}
          optionLabel='Select question quantity:'
          onChange={(e) => onQuestionQuantityChange(e.target.value)}
          isDefaultOptionDisabled={isQuestionQuantityDefaultOptionDisabled}
          fullWidth
        />
      </>
    );
  }
);

export default QuizResultsActionButtons;
