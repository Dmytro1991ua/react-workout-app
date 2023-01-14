import React, { ReactElement } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from '../../../../store/store.hooks';
import { selectCurrentQuestion, selectWorkoutsQuizQuestions } from '../../WorkoutsQuiz.slice';
import QuizAnswer from '../QuizAnswer/QuizAnswer';
import { QuestionText } from '../QuizQuestions/QuizQuestions.styled';

interface QuizAnswersProps {
  onAnswerClick: (answerOption: string) => void;
}

const QuizAnswers = React.memo(({ onAnswerClick }: QuizAnswersProps): ReactElement => {
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);
  const currentQuestion = useAppSelector(selectCurrentQuestion);

  return (
    <>
      <QuestionText>{quizQuestions[currentQuestion]?.question}</QuestionText>
      {quizQuestions[currentQuestion]?.answers.map((answer) => (
        <QuizAnswer key={uuidv4()} answer={answer} onAnswerClick={onAnswerClick} />
      ))}
    </>
  );
});

export default QuizAnswers;
