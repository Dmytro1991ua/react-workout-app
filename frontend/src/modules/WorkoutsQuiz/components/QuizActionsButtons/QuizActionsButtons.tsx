import React, { ReactElement, useMemo } from 'react';

import Button from '../../../../components/Button/Button';
import { useAppSelector } from '../../../../store/store.hooks';
import { selectCurrentAnswer } from '../../WorkoutsQuiz.slice';
import { quizQuestionsActionButtonsConfig } from '../QuizQuestions/QuizQuestions.configs';
import { ActionButtonsWrapper } from '../QuizQuestions/QuizQuestions.styled';

interface QuizActionsButtonsProps {
  onNextQuestionButtonClick: () => void;
  onQuizReset: () => void;
}

const QuizActionsButtons = React.memo(
  ({ onNextQuestionButtonClick, onQuizReset }: QuizActionsButtonsProps): ReactElement => {
    const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);

    const quizActionButtons = useMemo(
      () => quizQuestionsActionButtonsConfig(onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer),
      [onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer]
    );

    return (
      <ActionButtonsWrapper>
        {quizActionButtons.map((button) => (
          <Button
            key={button.id}
            backgroundColor={button.backgroundColor}
            color={button.color}
            hoverColor={button.hoverColor}
            onClick={button.onClick}
            disabled={button.isDisabled}
          >
            {button.label}
          </Button>
        ))}
      </ActionButtonsWrapper>
    );
  }
);

export default QuizActionsButtons;
