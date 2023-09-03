import React, { ReactElement } from 'react';

import { BMICalculatorSection as WorkoutQuizSection } from '../BMICalculator/BMICalculator.styled';
import QuizIntroductionView from './components/QuizIntroductionView/QuizIntroductionView';
import QuizQuestions from './components/QuizQuestions/QuizQuestions';
import { useWorkoutsQuiz } from './hooks/useWorkoutsQuiz';
import { QUiZ_INTRODUCTION_TITLE } from './WorkoutQuiz.constants';

const WorkoutsQuiz = (): ReactElement => {
  const { isStartQuizButtonClicked, onGoBackButtonClick, onStartQuizButtonClick, onSetIsStartQuizButtonClicked } =
    useWorkoutsQuiz();

  const renderWorkoutsQuiz = (
    <>
      {!isStartQuizButtonClicked ? (
        <QuizIntroductionView
          title={QUiZ_INTRODUCTION_TITLE}
          onStartQuizButtonClick={onStartQuizButtonClick}
          onGoBackButtonClick={onGoBackButtonClick}
        />
      ) : (
        <QuizQuestions onIsStartQuizButtonClicked={onSetIsStartQuizButtonClicked} />
      )}
    </>
  );

  return <WorkoutQuizSection>{renderWorkoutsQuiz}</WorkoutQuizSection>;
};

export default WorkoutsQuiz;
