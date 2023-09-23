import styled from 'styled-components';

import { colors } from '../../global-styles/ColorsPalette';

export const FormSelect = styled('select')<{ $actionPanelSelect?: boolean; $fullWidth?: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  min-width: 10rem;
  background-color: ${({ $actionPanelSelect }) =>
    $actionPanelSelect ? `${colors.mantisDarker}` : `${colors.powderAsh}`};
  color: ${({ $actionPanelSelect }) => ($actionPanelSelect ? `${colors.white}` : `${colors.black}`)};
  padding: ${({ $actionPanelSelect }) => ($actionPanelSelect ? '0.7rem 1.2rem' : '0.3rem 0rem')};
  cursor: pointer;
  border: ${({ $actionPanelSelect }) => ($actionPanelSelect ? `1.2px solid ${colors.mantis}` : `none`)};
  text-overflow: ellipsis;
  white-space: nowrap;

  option {
    color: ${colors.white};
    background-color: ${({ $actionPanelSelect }) =>
      $actionPanelSelect ? `${colors.lighterBlue}` : `${colors.powderAsh}`};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    background-color: ${({ $actionPanelSelect }) => ($actionPanelSelect ? `${colors.lighterBlue}` : `${colors.white}`)};
    cursor: pointer;
  }

  &:focus > option:checked {
    background-color: ${({ $actionPanelSelect }) => ($actionPanelSelect ? `${colors.mantis}` : `${colors.black}`)};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
