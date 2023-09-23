import { Dumbbell } from '@styled-icons/fa-solid';
import styled from 'styled-components';
import { Reset } from 'styled-icons/boxicons-regular';
import { DeleteDismiss } from 'styled-icons/fluentui-system-filled';

import { colors } from '../../../../../../global-styles/ColorsPalette';

const commonButtonStyles = `
  width: 2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media(width >= 28em) {
    width: 2.5rem;
  }
`;

export const ActionsPanelWrapper = styled('section')`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 0.2fr 0.2fr 0.2fr;
  grid-gap: 2rem;
  color: ${colors.white};

  @media (width >= 28em) {
    grid-template-columns: 2fr 0.3fr 0.3fr 0.3fr;
  }
`;

export const ActionButton = styled('button')`
  border: none;
  background-color: transparent;
`;

export const SelectWrapper = styled('div')`
  width: 100%;

  select {
    width: inherit;

    @media (width >= 28em) {
      width: fit-content;
    }
  }
`;

export const ResetButtonIcon = styled(Reset)`
  ${commonButtonStyles}
  fill: ${colors.mantisDarker};
`;

export const DeleteButtonIcon = styled(DeleteDismiss)`
  ${commonButtonStyles}
  fill: ${colors.tomato};
`;

export const ShowAllMarkers = styled(Dumbbell)`
  ${commonButtonStyles}
  color: ${colors.lighterBlue};
`;
