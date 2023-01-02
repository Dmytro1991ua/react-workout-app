import React, { ReactElement } from 'react';

import { Question, QuestionWrapper } from './QuizQuestion.styled';

interface QuizQuestionProps {
  answer: QuizAnswer;
}

const QuizQuestion = React.memo(({ answer }: QuizQuestionProps): ReactElement => {
  return (
    <QuestionWrapper>
      <Question>{answer.answerOption}</Question>
    </QuestionWrapper>
  );
});

export default QuizQuestion;
