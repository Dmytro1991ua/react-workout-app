import React, { ReactElement } from 'react';

import Logo from '../../../../assets/images/logo.png';
import { useAppSelector } from '../../../../store/store.hooks';
import { selectCurrentQuestion, selectWorkoutsQuizQuestions } from '../../WorkoutsQuiz.slice';
import { Header, QuestionsInfoWrapper, WorkoutLogo } from '../QuizQuestions/QuizQuestions.styled';
import ProgressBar from './../../../../components/ProgressBar/ProgressBar';

const QuizHeader = React.memo((): ReactElement => {
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);
  const currentQuestion = useAppSelector(selectCurrentQuestion);

  const progressBarValue = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <Header>
      <figure>
        <WorkoutLogo src={Logo} alt='Workout Logo' />
      </figure>
      <QuestionsInfoWrapper>
        <h3>Question</h3>
        <h4>
          {currentQuestion + 1} / {quizQuestions.length}
        </h4>
        <ProgressBar value={progressBarValue} max={100} color='mantis' hasColumnDirection={false} />
      </QuestionsInfoWrapper>
    </Header>
  );
});

export default QuizHeader;
