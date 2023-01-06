import styled from 'styled-components';

import { colors } from '../../../../global-styles/ColorsPalette';
import { fadeInRight } from '../../../../global-styles/Global.styled';
import { Logo } from '../../../Header/Header.styled';
import CheckIcon from '../../../../assets/images/quiz/check.svg';

export const QuizQuestionsSectionWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuizQuestionsSection = styled('div')`
  min-width: 30rem;
  max-width: 80rem;
  padding: 1rem;
  border-radius: 1.2rem;
  background-color: ${colors.lighterBlue};
  border: 4px solid ${colors.mantis};
  transition: all 0.6s ease-out;
  animation: ${fadeInRight} 0.6s ease-in-out;

  @media (min-width: 62em) {
    min-width: 45rem;
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
  margin-bottom: 3rem;
`;

export const Footer = styled('footer')`
  border-top: 2px solid ${colors.mantis};
  padding-top: 1rem;
`;

export const AnswersIndicatorWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnswerIndicator = styled('div')`
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  background-color: ${colors.lighterGrey};
  background-image: url(${CheckIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const QuizTimer = styled('p')`
  font-size: 2rem;
  text-align: center;

  span {
    color: ${colors.mantis};
  }
`;
