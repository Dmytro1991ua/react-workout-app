import styled from 'styled-components';
import { colors } from '../../global-styles/ColorsPalette';

import { WorkoutsDetailsSection } from '../WorkoutsDetails/WorkoutsDetails.styled';

export const BMICalculatorSection = styled(WorkoutsDetailsSection)`
  align-items: center;
  justify-content: center;
  color: ${colors.white};
`;

export const ContentWrapper = styled('div')`
  padding: 2rem;
  border: 3px solid ${colors.mantisDarker};
  border-radius: 1.2rem;
  min-width: 35rem;
  text-align: center;

  @media (min-width: 62em) {
    min-width: 50rem;
  }
`;

export const Title = styled('h2')`
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled('h3')`
  font-size: 1.8rem;
  opacity: 0.6;
  margin-bottom: 3rem;
`;
