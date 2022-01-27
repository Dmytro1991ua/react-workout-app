import styled from 'styled-components';

export const CustomButton = styled('button')<{
  fullWidth?: boolean;
  backgroundColor?: string;
  hoverColor?: string;
  color?: string;
}>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  font-size: 1.7rem;
  font-weight: bold;
  border: none;
  padding: ${({ fullWidth }) => (fullWidth ? '1rem' : '1rem 3rem')};
  border-radius: 1.2rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;

    &:hover {
      background-color: ${({ backgroundColor }) => backgroundColor};
    }
  }
`;
