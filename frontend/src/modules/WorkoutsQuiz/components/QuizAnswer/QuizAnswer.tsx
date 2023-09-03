import React, { ReactElement } from 'react';

import { useQuizAnswer } from './hooks/useQuizAnswer';
import { Question, QuestionWrapper } from './QuizAnswer.styled';

export interface QuizAnswerProps {
  answer: QuizAnswer;
  onAnswerClick: (answerOption: string) => void;
}

const QuizAnswer = React.memo(({ answer, onAnswerClick }: QuizAnswerProps): ReactElement => {
  const { isAnswerCorrect, isAnswerWrong, selectedCurrentAnswer, onHandleAnswerClick } = useQuizAnswer({
    answer,
    onAnswerClick,
  });

  return (
    <QuestionWrapper>
      <Question
        onClick={onHandleAnswerClick}
        $isAnswerCorrect={isAnswerCorrect}
        $isAnswerWrong={isAnswerWrong}
        $isDisabled={Boolean(selectedCurrentAnswer)}
      >
        {answer.answerOption}
      </Question>
    </QuestionWrapper>
  );
});

export default QuizAnswer;
