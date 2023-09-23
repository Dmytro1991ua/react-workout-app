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
  width: 95vw;
  padding: 1.5rem;
  border-radius: 1.2rem;
  background-color: ${colors.lighterBlue};
  border: 4px solid ${colors.mantis};
  transition: all 0.6s ease-out;
  animation: ${fadeInRight} 0.6s ease-in-out;

  @media (width >= 62em) {
    min-width: 60rem;
    width: 100vw;
  }
`;

export const Header = styled('header')`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${colors.mantis};

  figure {
    img {
      margin-right: 1.3rem;

      @media (width >= 28em) {
        margin-right: 2rem;
      }
    }
  }
`;

export const WorkoutLogo = styled(Logo)`
  width: 4rem;
  height: 4rem;
  cursor: default;

  @media (width >= 28em) {
    width: 6rem;
    height: 6rem;
  }
`;

export const QuestionsInfoWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left: auto;
  opacity: 0.8;
  letter-spacing: 0.2rem;

  button {
    font-size: clamp(1.4rem, 0.619rem + 1.9048vw, 1.7rem);
  }

  h3 {
    font-size: clamp(1.4rem, 0.619rem + 1.9048vw, 1.9rem);
  }

  h4 {
    font-size: clamp(1.3rem, 0.619rem + 1.9048vw, 1.6rem);
  }

  section {
    display: flex;
    align-items: end;

    progress {
      width: 3.5rem;

      @media (width >= 28em) {
        width: 7rem;
      }

      @media (width >= 48em) {
        width: revert;
      }
    }

    span {
      font-size: clamp(1.3rem, 0.619rem + 1.9048vw, 1.6rem);
    }
  }
`;

export const QuestionsCountWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (width >= 35em) {
    flex-direction: row;
  }
`;

export const QuestionText = styled('h2')`
  font-size: clamp(1.8rem, 0.619rem + 1.9048vw, 2rem);
  font-weight: 300;
  margin-bottom: 2rem;
`;

export const ActionButtonsWrapper = styled('div')<{ $isQuizResult?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1.2rem;
  border-top: 2px solid ${colors.mantis};
  margin-bottom: 2rem;

  @media (width >= 48em) {
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    flex: ${({ $isQuizResult }) => ($isQuizResult ? '0 1 45%' : '0 1 35%')};
    font-size: clamp(1.55rem, 0.619rem + 1.9048vw, 1.7rem);
  }
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
