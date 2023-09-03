import styled from 'styled-components';

import { QuizQuestionsSection } from '../QuizQuestions/QuizQuestions.styled';

export const QuizResultSection = styled(QuizQuestionsSection)`
  max-width: 35rem;
  margin: 0 1.6rem;

  @media (min-width: 30em) {
    min-width: 45rem;
  }

  @media (min-width: 48em) {
    min-width: 50rem;
  }

  @media (min-width: 62em) {
    min-width: 60rem;
  }
`;
