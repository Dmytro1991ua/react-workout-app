import { Link } from 'react-router-dom';
import styled from 'styled-components';

import HeroImgBig from '../../assets/images/home/home-big.jpg';
import HeroImgSmall from '../../assets/images/home/home-small.jpg';
import NotFountImageBig from '../../assets/images/not-found/workout-big.jpg';
import NotFountImageSmall from '../../assets/images/not-found/workout-small.jpg';
import { colors } from '../../global-styles/ColorsPalette';
import { bounceInLeft } from '../../global-styles/Global.styled';

export const CommonSectionsContainer = styled('section')<{
  sectionName?: string;
}>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: ${({ sectionName }) =>
    sectionName === 'Home'
      ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImgSmall})`
      : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NotFountImageSmall})`};
  background-position: 28%;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (min-resolution: 192dpi) and (min-width: 37.9em),
    (min-width: 125em),
    only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.9em),
    only screen and (min-width: 125em) {
    background-image: ${({ sectionName }) =>
      sectionName === 'Home'
        ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImgBig})`
        : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NotFountImageBig})`};
  }
`;

export const CommonSectionsBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 0.3s ease-in-out;
  animation: ${bounceInLeft} 0.8s ease-in-out;
  padding: 0 1rem;
  margin-top: 8rem;

  @media (min-width: 45em) {
    margin-bottom: 5rem;
    margin-top: 12rem;
  }
`;

export const CommonSectionsTitle = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CommonSectionsBtn = styled(Link)<{ sectionName?: string }>`
  display: inline-block;
  padding: 1.4rem 1.8rem;
  background-color: ${({ sectionName }) =>
    sectionName === 'Not Found' ? `${colors.lighterBlue}` : `${colors.mantisDarker}`};
  color: ${colors.white};
  border-radius: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(7px 8px 4px ${colors.darkBlue});
  margin-bottom: ${({ sectionName }) => (sectionName === 'Not Found' ? 0 : '1.2rem')};

  &:hover {
    background-color: ${({ sectionName }) =>
      sectionName === 'Not Found' ? `${colors.mantisDarker}` : `${colors.mantis}`};
    transform: translateY(-0.2rem);
  }

  &:active {
    transform: translateY(0rem);
  }

  @media (min-width: 45em) {
    padding: 2rem 2.2rem;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0;
  }
`;
