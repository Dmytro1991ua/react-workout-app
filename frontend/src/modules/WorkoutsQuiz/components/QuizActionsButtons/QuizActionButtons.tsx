import React, { ReactElement, useMemo } from 'react';

import { generateFormActionButtons } from '../../../../utils';
import { ActionButtonsWrapper, Timer } from '../QuizQuestions/QuizQuestions.styled';
import { useQuizActionsButtons } from './hooks/useQuizActionsButtons';
import { quizQuestionsActionButtonsConfig } from './QuizActionButtons.configs';

interface QuizActionsButtonsProps {
  onNextQuestionButtonClick: () => void;
  onQuizReset: () => void;
}

const QuizActionsButtons = React.memo(
  ({ onNextQuestionButtonClick, onQuizReset }: QuizActionsButtonsProps): ReactElement => {
    const { isTimerLessThanFifteenSeconds, quizQuestions, selectedCurrentAnswer, timer } = useQuizActionsButtons({
      onQuizReset,
    });

    const quizActionButtonsConfig = useMemo(
      () => quizQuestionsActionButtonsConfig(onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer),
      [onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer]
    );

    const quizActionsButtons = useMemo(
      () => generateFormActionButtons(quizActionButtonsConfig),
      [quizActionButtonsConfig]
    );

    const renderActionButtons = <>{quizActionsButtons}</>;

    const renderQuizTimer = (
      <>
        {quizQuestions.length > 1 && (
          <Timer $isLessThanFifteenSeconds={isTimerLessThanFifteenSeconds}>
            Time Left: <span>{timer}</span>
          </Timer>
        )}
      </>
    );

    return (
      <ActionButtonsWrapper>
        {renderActionButtons}
        {renderQuizTimer}
      </ActionButtonsWrapper>
    );
  }
);

export default QuizActionsButtons;
