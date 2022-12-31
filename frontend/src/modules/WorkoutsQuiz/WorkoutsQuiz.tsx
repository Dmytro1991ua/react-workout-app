import React, { ReactElement, useState } from 'react';

import { AppRoutes } from '../../App.enums';
import Button from '../../components/Button/Button';
import history from '../../services/History.service';
import { BMICalculatorSection as WorkoutQuizSection } from '../BMICalculator/BMICalculator.styled';
import QuizIntroductionView from './components/QuizIntroductionView/QuizIntroductionView';
import { QUiZ_INTRODUCTION_TITLE } from './QuizIntroduction.constants';

const WorkoutsQuiz = (): ReactElement => {
  const [isStartQuizButtonClicked, setIsStartQuizButtonClicked] = useState<boolean>(false);

  function onStartQuizButtonClick(): void {
    setIsStartQuizButtonClicked(true);
  }

  function onGoBackButtonClick(): void {
    history.push(AppRoutes.Home);
  }

  const renderWorkoutsQuiz = (
    <>
      {!isStartQuizButtonClicked ? (
        <QuizIntroductionView
          title={QUiZ_INTRODUCTION_TITLE}
          onStartQuizButtonClick={onStartQuizButtonClick}
          onGoBackButtonClick={onGoBackButtonClick}
        />
      ) : (
        <Button onClick={() => setIsStartQuizButtonClicked(false)}>Go Back</Button>
      )}
    </>
  );

  return <WorkoutQuizSection>{renderWorkoutsQuiz}</WorkoutQuizSection>;
};

export default WorkoutsQuiz;
