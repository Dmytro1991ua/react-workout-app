import styled from 'styled-components';
import { colors } from '../../global-styles/ColorsPalette';

export const ProgressBarContainer = styled('div')<{
  color?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   
  progress[value] {
    width: ${({ width }) => width};
    appearance: none;

    ::-webkit-progress-bar {
      height: 1rem;
      border-radius: 2rem;
      background-color: ${colors.powderAsh};
    }

    ::-webkit-progress-value {
      height: 1rem;
      border-radius: 2rem;
      background-color: ${({ color }) => color};
    }
  }

  span {
    font-size: 1.5rem
    font-weight: bold;
    margin-left 0.8rem;
  }
`;
