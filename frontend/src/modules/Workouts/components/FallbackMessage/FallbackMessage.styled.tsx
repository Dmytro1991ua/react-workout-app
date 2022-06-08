import styled from 'styled-components';

import { colors } from '../../../../global-styles/ColorsPalette';

export const FallbackMessageTitle = styled('h2')`
  color: ${colors.white};
  font-size: 1.8rem;
`;

export const FallbackMessageSubtitle = styled(FallbackMessageTitle)`
  font-size: 1.5rem;
  opacity: 0.7;
`;
