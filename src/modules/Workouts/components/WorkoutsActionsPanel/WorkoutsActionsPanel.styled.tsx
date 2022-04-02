import styled from 'styled-components';
import { DeleteDismiss } from 'styled-icons/fluentui-system-filled';
import { ClearAll } from 'styled-icons/material-twotone';

import { colors } from '../../../../global-styles/ColorsPalette';

const commonButtonStyles = `
  width: 2.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
}`;

export const ActionsPanelWrapper = styled('section')`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr 0.3fr 0.3fr;
  grid-gap: 2rem;
  color: ${colors.white};
`;

export const ActionButton = styled('button')`
  border: none;
  background-color: transparent;
`;

export const ClearAllButtonIcon = styled(ClearAll)`
  ${commonButtonStyles}
  fill: ${colors.mantisDarker};
`;

export const DeleteButtonIcon = styled(DeleteDismiss)`
  ${commonButtonStyles}
  fill: ${colors.tomato};
`;
