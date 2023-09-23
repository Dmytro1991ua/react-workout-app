import styled from 'styled-components';

import { colors } from '../../../../global-styles/ColorsPalette';
import { fadeInDown } from '../../../../global-styles/Global.styled';

export const QuizSection = styled('div')`
  max-width: 100%;
  text-align: center;
  padding: 3rem 1rem;
  border-radius: 1.2rem;
  background-color: ${colors.lighterBlue};
  border: 4px solid ${colors.mantisDarker};
  transition: all 0.6s ease-out;
  animation: ${fadeInDown} 0.6s ease-in-out;

  @media (width >= 48em) {
    padding: 5rem 3rem;
  }

  h2 {
    font-size: clamp(1.5rem, 0.619rem + 1.9048vw, 2rem);
    margin-bottom: 2rem;

    @media (width >= 48em) {
      margin-bottom: 4rem;
    }
  }
`;

export const ActionsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media (width >= 28em) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  button {
    font-size: clamp(1.3rem, 0.619rem + 1.9048vw, 1.5rem);
  }
`;
