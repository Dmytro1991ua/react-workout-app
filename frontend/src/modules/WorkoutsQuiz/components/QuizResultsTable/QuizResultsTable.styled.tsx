import styled from 'styled-components';

import { colors } from '../../../../global-styles/ColorsPalette';

export const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;
  margin: 3rem 0;
`;

export const Cell = styled('td')`
  border: 1px solid ${colors.lighterGrey};
  padding: 0.8rem 1.6rem;
  text-align: left;
`;
