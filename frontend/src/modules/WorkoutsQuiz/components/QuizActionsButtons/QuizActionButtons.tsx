import React, { ReactElement, useMemo } from 'react';

import { useAppSelector } from '../../../../store/store.hooks';
import { useCountDown } from '../../hooks/useCountDown';
import { timeFormatter } from '../../utils';
import { QUIZ_DEFAULT_TIMER } from '../../WorkoutQuiz.constants';
import { selectCurrentAnswer, selectWorkoutsQuizQuestions } from '../../WorkoutsQuiz.slice';
import { ActionButtonsWrapper, QuizButton, Timer } from '../QuizQuestions/QuizQuestions.styled';
import { quizQuestionsActionButtonsConfig } from './QuizActionButtons.configs';

interface QuizActionsButtonsProps {
  onNextQuestionButtonClick: () => void;
  onQuizReset: () => void;
}

const QuizActionsButtons = React.memo(
  ({ onNextQuestionButtonClick, onQuizReset }: QuizActionsButtonsProps): ReactElement => {
    const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);
    const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);

    const { countDown } = useCountDown({ seconds: QUIZ_DEFAULT_TIMER, onQuizReset });

    const isTimerLessThanFifteenSeconds = countDown < 15;

    const timer = useMemo(() => timeFormatter(countDown), [countDown]);

    const quizActionButtons = useMemo(
      () => quizQuestionsActionButtonsConfig(onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer),
      [onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer]
    );

    const renderActionButtons = (
      <>
        {quizActionButtons.map((button) => (
          <QuizButton
            key={button.id}
            backgroundColor={button.backgroundColor}
            color={button.color}
            hoverColor={button.hoverColor}
            onClick={button.onClick}
            disabled={button.isDisabled}
          >
            {button.label}
          </QuizButton>
        ))}
      </>
    );

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
        <>
          {renderActionButtons}
          {renderQuizTimer}
        </>
      </ActionButtonsWrapper>
    );
  }
);

export default QuizActionsButtons;
