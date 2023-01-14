import React, { ReactElement } from 'react';

import Logo from '../../../../assets/images/logo.png';
import Button from '../../../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import {
  selectCurrentAnswer,
  selectCurrentQuestion,
  selectWorkoutsQuizQuestions,
  setFiftyFiftyChoice,
} from '../../WorkoutsQuiz.slice';
import { Header, QuestionsInfoWrapper, WorkoutLogo } from '../QuizQuestions/QuizQuestions.styled';
import ProgressBar from './../../../../components/ProgressBar/ProgressBar';

const QuizHeader = React.memo((): ReactElement => {
  const quizQuestions = useAppSelector(selectWorkoutsQuizQuestions);
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const selectedCurrentAnswer = useAppSelector(selectCurrentAnswer);

  const dispatch = useAppDispatch();

  const progressBarValue = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const isButtonDisabled = quizQuestions[currentQuestion].answers.length < 3 || Boolean(selectedCurrentAnswer);

  function handleFiftyFiftyChoice(): void {
    dispatch(setFiftyFiftyChoice());
  }

  return (
    <Header>
      <figure>
        <WorkoutLogo src={Logo} alt='Workout Logo' />
      </figure>
      <QuestionsInfoWrapper>
        <Button
          backgroundColor='mantis'
          hoverColor='mantisDarker'
          color='white'
          onClick={handleFiftyFiftyChoice}
          disabled={isButtonDisabled}
        >
          50/50
        </Button>
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
