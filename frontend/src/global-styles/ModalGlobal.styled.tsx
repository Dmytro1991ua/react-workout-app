import styled from 'styled-components';

import { colors } from './ColorsPalette';

export const GlobalModal = styled('section')`
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 5px solid ${colors.mantis};
  outline: none;
  overflow: auto;
  color: ${colors.white};
  margin: 0 1.6rem;
`;

export const GlobalOverlay = styled('div')`
  position: fixed;
  background-color: ${colors.transparentMantisDarker};
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
