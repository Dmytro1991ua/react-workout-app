import styled from 'styled-components';

import { colors } from '../../../../global-styles/ColorsPalette';
import { fadeInDown } from '../../../../global-styles/Global.styled';

export const QuizSection = styled('div')`
  max-width: 100%;
  text-align: center;
  padding: 5rem 3rem;
  border-radius: 1.2rem;
  background-color: ${colors.lighterBlue};
  border: 4px solid ${colors.mantisDarker};
  transition: all 0.6s ease-out;
  animation: ${fadeInDown} 0.6s ease-in-out;

  h2 {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

export const ActionsWrapper = styled('div')`
  button {
    margin-right: 2rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
