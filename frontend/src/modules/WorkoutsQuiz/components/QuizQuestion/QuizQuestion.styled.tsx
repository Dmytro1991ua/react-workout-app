import styled from 'styled-components';
import { colors } from '../../../../global-styles/ColorsPalette';
import { fadeIn } from '../../../../global-styles/Global.styled';

export const QuestionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.6s ease-in-out forwards;
  transition: animation 0.6s ease-in-out;
`;

export const Question = styled('button')`
  display: inline-block;
  border: 2px solid ${colors.mantis};
  font-size: 1.6rem;
  padding: 1.5rem 1rem;
  background-color: ${colors.gray95};
  border-radius: 1.5rem;
  color: ${colors.darkBlue};
  margin-bottom: 1.5rem;
  cursor: pointer;
  text-align: left;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: ${colors.lighterGrey};
  }
`;
