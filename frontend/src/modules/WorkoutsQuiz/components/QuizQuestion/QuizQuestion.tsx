import React, { ReactElement } from 'react';

import { useAppSelector } from '../../../../store/store.hooks';
import { selectCorrectAnswerBasedOnIsCorrectProperty, selectCurrentAnswer } from '../../WorkoutsQuiz.slice';
import { Question, QuestionWrapper } from './QuizQuestion.styled';

interface QuizQuestionProps {
  answer: QuizAnswer;
  onAnswerClick: (value: boolean, answerOption: string) => void;
}

const QuizQuestion = React.memo(({ answer, onAnswerClick }: QuizQuestionProps): ReactElement => {
  const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);
  const correctAnswer = useAppSelector(selectCorrectAnswerBasedOnIsCorrectProperty);

  const isAnswerCorrect = (selectedCurrentAnswer && answer.answerOption === correctAnswer) as unknown as boolean;
  const isAnswerWrong = (selectedCurrentAnswer === answer.answerOption &&
    selectedCurrentAnswer !== correctAnswer) as unknown as boolean;

  return (
    <QuestionWrapper>
      <Question
        onClick={() => {
          onAnswerClick(answer.isCorrect, answer.answerOption);
        }}
        $isAnswerCorrect={isAnswerCorrect}
        $isAnswerWrong={isAnswerWrong}
        $isDisabled={Boolean(selectedCurrentAnswer)}
      >
        {answer.answerOption}
      </Question>
    </QuestionWrapper>
  );
});

export default QuizQuestion;
