import styled from 'styled-components';
import { colors } from '../../global-styles/ColorsPalette';

import { gear, rotation } from '../../global-styles/Global.styled';
import { PreloaderContainer } from '../Preloader/Preloade.styled';

export const LoaderContainer = styled(PreloaderContainer)`
  background-color: ${colors.lighterBlue};
`;

export const Box1 = styled.div`
  width: 6rem;
  height: 6rem;
  margin-right: 3rem;
  border: 4px solid ${colors.darkBlue};
  animation: ${rotation} 0.5s infinite ease-in-out;
`;

export const Box2 = styled.div`
  width: 6rem;
  height: 6rem;
  border: 4px solid ${colors.mantisDarker};
  animation: ${gear} 0.5s infinite ease-in-out;
`;
