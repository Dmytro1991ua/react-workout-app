import styled from 'styled-components';

import { colors } from './../../../../global-styles/ColorsPalette';

export const ResultsHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${colors.mantis};
`;

export const ResultsTitle = styled('h2')`
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
`;
