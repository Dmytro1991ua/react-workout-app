import styled from 'styled-components';

import { fadeInRight } from '../../../../global-styles/Global.styled';
import { Logo } from '../../../Header/Header.styled';
import { colors } from '../../../../global-styles/ColorsPalette';
import Button from '../../../../components/Button/Button';

export const QuizQuestionsSectionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizQuestionsSection = styled('div')`
  min-width: 30rem;
  max-width: 80rem;
  width: 100vw;
  padding: 1.5rem;
  border-radius: 1.2rem;
  background-color: ${colors.lighterBlue};
  border: 4px solid ${colors.mantis};
  transition: all 0.6s ease-out;
  animation: ${fadeInRight} 0.6s ease-in-out;

  @media (min-width: 62em) {
    min-width: 60rem;
  }
`;

export const Header = styled('header')`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${colors.mantis};
`;

export const WorkoutLogo = styled(Logo)`
  width: 6rem;
  height: 6rem;
  cursor: default;
`;

export const QuestionsInfoWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-left: auto;
  opacity: 0.8;
  letter-spacing: 0.2rem;

  h3 {
    margin-right: 0.7rem;
  }

  h4 {
    margin-right: 2rem;
  }
`;

export const QuestionText = styled('h2')`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const ActionButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
  border-top: 2px solid ${colors.mantis};
`;

export const QuizButton = styled(Button)`
  flex: 0 1 35%;
`;

export const Timer = styled('h3')<{ $isLessThanFifteenSeconds?: boolean }>`
  font-size: 1.4rem;
  letter-spacing: 0.2rem;

  span {
    color: ${({ $isLessThanFifteenSeconds }) => ($isLessThanFifteenSeconds ? `${colors.tomato}` : `${colors.mantis}`)};
  }
`;
