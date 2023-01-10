import React, { ReactElement } from 'react';

import Logo from '../../../../assets/images/logo.png';
import { WorkoutLogo } from '../QuizQuestions/QuizQuestions.styled';
import { ResultsHeader, ResultsTitle } from './QuizResultsHeader.styled';

const QuizResultsHeader = React.memo((): ReactElement => {
  return (
    <ResultsHeader>
      <WorkoutLogo src={Logo} alt='Workout Logo' />
      <ResultsTitle>Quiz Results</ResultsTitle>
    </ResultsHeader>
  );
});

export default QuizResultsHeader;
