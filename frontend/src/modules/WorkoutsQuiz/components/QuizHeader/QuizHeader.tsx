import React, { ReactElement } from 'react';

import Logo from '../../../../assets/images/logo.png';
import {
  Header,
  QuestionsCountWrapper,
  QuestionsInfoWrapper,
  WorkoutLogo,
} from '../QuizQuestions/QuizQuestions.styled';
import ProgressBar from './../../../../components/ProgressBar/ProgressBar';
import { useQuizHeader } from './hooks/useQuizHeader';

const QuizHeader = React.memo((): ReactElement => {
  const { actionButtons, currentQuestion, progressBarValue, quizQuestionsLength } = useQuizHeader();

  const renderQuestionsInfo = (
    <>
      {Boolean(quizQuestionsLength) && (
        <QuestionsInfoWrapper>
          {actionButtons}
          <QuestionsCountWrapper>
            <h3>Question</h3>
            <h4>
              {currentQuestion + 1} / {quizQuestionsLength}
            </h4>
          </QuestionsCountWrapper>
          <ProgressBar value={progressBarValue} max={100} color='mantis' hasColumnDirection={false} />
        </QuestionsInfoWrapper>
      )}
    </>
  );

  return (
    <Header>
      <figure>
        <WorkoutLogo src={Logo} alt='Workout Logo' />
      </figure>
      {renderQuestionsInfo}
    </Header>
  );
});

export default QuizHeader;
