import styled from 'styled-components';

import { colors } from '../../global-styles/ColorsPalette';
import { fadeInDown } from '../../global-styles/Global.styled';

export const WorkoutsSection = styled.section`
  height: 100vh;
  margin: 8rem 1.2rem 1.2rem;
  overscroll-behavior-y: none;
  animation: ${fadeInDown} 0.3s ease-in-out;
  filter: drop-shadow(7px 8px 4px ${colors.darkBlue});
  overflow: hidden;

  @media (min-width: 48em) {
    margin: 10rem 1.2rem 1.2rem;
  }
`;

export const WorkoutsSectionBody = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 62em) {
    flex-direction: row;
  }
`;

export const WorkoutsFeatures = styled.aside`
  flex: 0 1 35rem;
  min-height: 10rem;
  background-color: ${colors.darkBlue};
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  padding: 0 1.2rem 2rem;
  overflow: auto;

  @media (width >= 62em) {
    flex: 0 1 50rem;
    height: 100vh;
    padding: 0 1.2rem 10rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 1.2rem;
  }

  @media (width >= 120em) {
    flex: 0 1 60rem;
  }
`;

export const FeaturesTitle = styled('h3')<{ hasWorkouts?: boolean }>`
  font-size: 2.5rem;
  font-family: 'Akaya Telivigala', cursive;
  color: ${colors.white};
  text-align: center;
  padding: 1rem 0 0;
  margin-bottom: ${({ hasWorkouts }) => (hasWorkouts ? '4rem' : '2rem')};
  letter-spacing: 0.1rem;

  @media (min-width: 62em) {
    font-size: 3rem;
    padding: 3rem 0 0;
  }
`;

export const Map = styled.div`
  background: ${colors.powderAsh};
  overflow: hidden;
  height: 100vh;

  @media (min-width: 62em) {
    flex: 1;
  }
`;

export const ActionsPanel = styled('div')`
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${colors.mantis};
  transition: all 0.3s ease-out;
  animation: ${fadeInDown} 0.4s ease-in-out;
`;

export const LoaderWrapper = styled('div')`
  display: flex;
  justify-content: center;
  height: auto;
`;
