import styled from 'styled-components';

import { QuizQuestionsSection } from '../QuizQuestions/QuizQuestions.styled';

export const QuizResultSection = styled(QuizQuestionsSection)`
  max-width: 45rem;

  @media (min-width: 62em) {
    min-width: 55rem;
  }
`;
