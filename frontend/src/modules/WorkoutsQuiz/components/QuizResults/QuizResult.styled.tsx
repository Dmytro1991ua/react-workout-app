import styled from 'styled-components';

import { QuizQuestionsSection } from '../QuizQuestions/QuizQuestions.styled';
import { colors } from '../../../../global-styles/ColorsPalette';

export const QuizResultSection = styled(QuizQuestionsSection)`
  max-width: 35rem;

  @media (min-width: 62em) {
    min-width: 50rem;
  }
`;
