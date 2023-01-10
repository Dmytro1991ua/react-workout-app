import React, { ReactElement, useMemo } from 'react';

import { ActionButtonsWrapper } from '../QuizQuestions/QuizQuestions.styled';
import { quizResultsActionButtonsConfig } from './QuizResultsActionButtons.config';
import { QuizResultsButton } from './QuizResultsActionButtons.styled';

interface QuizResultsActionsProps {
  onTryAgainButtonClick: () => void;
  onQuitButtonClick: () => void;
}

const QuizResultsActionButtons = React.memo(
  ({ onTryAgainButtonClick, onQuitButtonClick }: QuizResultsActionsProps): ReactElement => {
    const quizResultsActionButtons = useMemo(
      () => quizResultsActionButtonsConfig(onTryAgainButtonClick, onQuitButtonClick),

      []
    );

    return (
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
    );
  }
);

export default QuizResultsActionButtons;
