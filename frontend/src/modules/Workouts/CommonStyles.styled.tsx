import styled from 'styled-components';

import { colors } from '../../global-styles/ColorsPalette';
import { fadeInDown } from '../../global-styles/Global.styled';

export const FormAndFallbackMessageWrapper = styled('section')`
  background-color: ${colors.lighterBlue};
  border-radius: 5px;
  padding: 1.2rem;
  margin-bottom: 1.75rem;
  display: grid;
  gap: 1.5rem 2.5rem;
  transition: all 0.5s, transform 1ms;
  border: 2px solid ${colors.mantis};
  animation: ${fadeInDown} 0.3s ease-in-out;

  @media (min-width: 48em) {
    padding: 1.5rem 2.75rem;
  }
`;
