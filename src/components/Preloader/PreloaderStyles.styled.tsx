import styled from 'styled-components';

import { colors, rotationA, rotationB } from '../../global-styles/GlobalStyles.styled';

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.darkBlue};
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  transition: all 1s ease;
`;

export const Loader = styled.div`
  position: relative;
  height: 80px;
  width: 80px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    border: 50px solid transparent;
    border-bottom-color: ${colors.mantis};
    animation: ${rotationA} 1.3s linear infinite 0.5s;
  }

  &::before {
    transform: rotate(90deg);
    animation: ${rotationB} 1.3s linear infinite;
  }
`;
