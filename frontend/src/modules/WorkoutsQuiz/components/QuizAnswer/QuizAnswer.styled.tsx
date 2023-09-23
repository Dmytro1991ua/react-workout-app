import styled from 'styled-components';
import { colors } from '../../../../global-styles/ColorsPalette';
import { fadeIn } from '../../../../global-styles/Global.styled';

export const QuestionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease-in-out forwards;
  transition: animation 0.6s ease-in-out;
`;

export const Question = styled('button')<{
  $isAnswerCorrect: boolean;
  $isAnswerWrong: boolean;
  $isDisabled: boolean;
}>`
  display: inline-block;
  border: none;
  font-size: clamp(1.4rem, 0.619rem + 1.9048vw, 1.6rem);
  background-color: ${colors.gray95};
  padding: 1.5rem 1rem;
  border-radius: 1.5rem;
  color: ${({ $isAnswerCorrect, $isAnswerWrong }) =>
    $isAnswerCorrect || $isAnswerWrong ? `${colors.white}` : `${colors.darkBlue}`};
  margin-bottom: 1.5rem;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;
  background-color: ${colors.gray95};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};
  z-index: 1;

  &:hover {
    background-color: ${colors.lighterGrey};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ $isAnswerCorrect, $isAnswerWrong }) => ($isAnswerCorrect || $isAnswerWrong ? '100%' : '0%')};
    border: ${({ $isAnswerCorrect, $isAnswerWrong }) =>
      $isAnswerCorrect
        ? `3px solid ${colors.mantisDarker}`
        : $isAnswerWrong
        ? `3px solid ${colors.error}`
        : '3px solid transparent'};
    height: 100%;
    border-radius: 1.5rem;
    background-color: ${({ $isAnswerCorrect, $isAnswerWrong }) =>
      $isAnswerCorrect ? `${colors.mantis}` : $isAnswerWrong ? `${colors.tomato}` : 'transparent'};
    z-index: -1;
    transition: 0.4s ease-in-out;
  }
`;
