import styled from 'styled-components';

import { colors } from '../../../../../../global-styles/ColorsPalette';

export const WeatherDetailsTable = styled('table')`
  width: 100%;
  border-collapse: collapse;
`;

export const WeatherDetailsTableItem = styled('td')`
  border: 2px solid ${colors.mantisDarker};
  padding: 0.8rem 1.6rem;
  text-align: left;
`;
