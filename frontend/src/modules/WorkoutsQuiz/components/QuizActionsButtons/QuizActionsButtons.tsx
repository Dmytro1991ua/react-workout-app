import React, { ReactElement, useMemo } from 'react';

import { useAppSelector } from '../../../../store/store.hooks';
import { useCountDown } from '../../hooks/useCountDown';
import { timeFormatter } from '../../utils';
import { QUIZ_DEFAULT_TIMER } from '../../WorkoutQuiz.constants';
import { selectCurrentAnswer } from '../../WorkoutsQuiz.slice';
import { quizQuestionsActionButtonsConfig } from '../QuizQuestions/QuizQuestions.configs';
import { ActionButtonsWrapper, QuizButton, Timer } from '../QuizQuestions/QuizQuestions.styled';

interface QuizActionsButtonsProps {
  onNextQuestionButtonClick: () => void;
  onQuizReset: () => void;
}

const QuizActionsButtons = React.memo(
  ({ onNextQuestionButtonClick, onQuizReset }: QuizActionsButtonsProps): ReactElement => {
    const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);

    const { countDown } = useCountDown({ seconds: QUIZ_DEFAULT_TIMER, onQuizReset });

    const isTimerLessThanFifteenSeconds = countDown < 15;

    const timer = useMemo(() => timeFormatter(countDown), [countDown]);

    const quizActionButtons = useMemo(
      () => quizQuestionsActionButtonsConfig(onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer),
      [onNextQuestionButtonClick, onQuizReset, selectedCurrentAnswer]
    );

    return (
      <ActionButtonsWrapper>
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
        <Timer $isLessThanFifteenSeconds={isTimerLessThanFifteenSeconds}>
          Time Left: <span>{timer}</span>
        </Timer>
      </ActionButtonsWrapper>
    );
  }
);

export default QuizActionsButtons;
