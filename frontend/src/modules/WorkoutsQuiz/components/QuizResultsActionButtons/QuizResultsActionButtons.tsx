import React, { ReactElement, useMemo } from 'react';

import { useAppSelector } from '../../../../store/store.hooks';
import { QUIZ_QUESTIONS_OPTIONS } from '../../WorkoutQuiz.constants';
import { selectSelectedQuestionQuantity } from '../../WorkoutsQuiz.slice';
import { ActionButtonsWrapper } from '../QuizQuestions/QuizQuestions.styled';
import { Select } from './../../../../components/Select/Select';
import { quizResultsActionButtonsConfig } from './QuizResultsActionButtons.config';
import { QuizResultsButton } from './QuizResultsActionButtons.styled';

interface QuizResultsActionsProps {
  isQuestionQuantityDefaultOptionDisabled: boolean;
  onTryAgainButtonClick: () => void;
  onQuitButtonClick: () => void;
  onHandleQuestionQuantityChange: (value: string) => void;
}

const QuizResultsActionButtons = React.memo(
  ({
    isQuestionQuantityDefaultOptionDisabled,
    onTryAgainButtonClick,
    onQuitButtonClick,
    onHandleQuestionQuantityChange,
  }: QuizResultsActionsProps): ReactElement => {
    const questionQuantity = useAppSelector(selectSelectedQuestionQuantity);

    const quizResultsActionButtons = useMemo(
      () => quizResultsActionButtonsConfig(onTryAgainButtonClick, onQuitButtonClick),

      [onQuitButtonClick, onTryAgainButtonClick]
    );

    return (
      <>
        <ActionButtonsWrapper>
          {quizResultsActionButtons.map((button) => (
            <QuizResultsButton
              key={button.id}
              backgroundColor={button.backgroundColor}
              color={button.color}
              hoverColor={button.hoverColor}
              onClick={button.onClick}
              disabled={button.isDisabled}
            >
              {button.label}
            </QuizResultsButton>
          ))}
        </ActionButtonsWrapper>
        <Select
          options={QUIZ_QUESTIONS_OPTIONS}
          actionPanelSelect
          name=''
          value={questionQuantity}
          optionLabel='Select question quantity:'
          onChange={(e) => onHandleQuestionQuantityChange(e.target.value)}
          isDefaultOptionDisabled={isQuestionQuantityDefaultOptionDisabled}
          fullWidth
        />
      </>
    );
  }
);

export default QuizResultsActionButtons;
