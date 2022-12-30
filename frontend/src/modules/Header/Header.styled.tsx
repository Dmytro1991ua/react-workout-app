import { LogIn } from '@styled-icons/boxicons-regular';
import { Dumbbell } from '@styled-icons/fluentui-system-filled/Dumbbell';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InfoCircle } from 'styled-icons/bootstrap';
import { LogOut } from 'styled-icons/boxicons-regular';
import { Home } from 'styled-icons/entypo';
import { Body } from '@styled-icons/ionicons-solid/Body';
import { QuizNew } from '@styled-icons/fluentui-system-filled/QuizNew';

import { colors } from '../../global-styles/ColorsPalette';
import { fadeInDown } from '../../global-styles/Global.styled';

const CommonNavigationIconStyles = `
  fill: ${colors.mantis};
  width: 3rem;
  transition: all 0.3s ease-in-out;
  margin-right: 0;

  :hover {
    fill: ${colors.white};
  }

   @media (min-width: 48em) {
    margin-right: 3rem;
  }
`;

export const HeaderSection = styled.header`
  background-color: ${colors.lighterBlue};
  padding: 0.4rem 0;
  position: fixed;
  width: 100%;
  z-index: 3;
  border-bottom: 4px solid ${colors.mantis};
  transition: all 0.3s ease-out;
  animation: ${fadeInDown} 0.4s ease-in-out;

  @media (min-width: 48em) {
    padding: 0.6rem 0;
  }
`;

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  margin-right: 2rem;

  @media (min-width: 48em) {
    width: 6.5rem;
    height: 6.5rem;
    margin-right: 0;
  }
`;

export const HeaderSectionBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NavigationWrapper = styled('div')`
  display: flex;
  align-items: center;

  @media (min-width: 48em) {
    margin-left: auto;
  }
`;

// Navigation
export const List = styled('ul')<{ open?: boolean; isUserAuthenticated: boolean }>`
  position: absolute;
  top: 6.3rem;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'center' : 'flex-start')};
  background-color: ${colors.lighterBlue};
  border-right: 5px solid ${colors.mantis};
  padding: 7rem 2rem 2rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200%)')};
  transition: all 0.3s ease-in-out;

  @media (min-width: 48em) {
    position: relative;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    background-color: transparent;
    border-right: 5px solid transparent;
    padding: 0;
    transform: translateX(0);
    transition: none;
  }
`;

export const ListItem = styled('li')`
  margin-bottom: 2rem;

  &:nth-child(6) {
    margin-bottom: 0;
  }

  @media (min-width: 48em) {
    margin-bottom: 0rem;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const ListLink = styled(Link)<{ isActive?: boolean }>`
  svg {
    fill: ${({ isActive }) => (isActive ? `${colors.white}` : `${colors.mantis}`)};
  }

  img {
    border: ${({ isActive }) => (isActive ? `2px solid ${colors.white}` : 'none')};
    margin-right: 0;
    margin-bottom: 0;

    @media (min-width: 48em) {
      margin-right: 2rem;
    }
  }
`;

export const CustomDumbbellIcon = styled(Dumbbell)<{ isUserAuthenticated?: boolean }>`
  ${CommonNavigationIconStyles}
  display: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'block' : 'none')};
`;

export const CustomHomeIcon = styled(Home)`
  ${CommonNavigationIconStyles}
`;

export const CustomLogoutIcon = styled(LogOut)<{ isUserAuthenticated?: boolean }>`
  ${CommonNavigationIconStyles}
  display: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'block' : 'none')};
`;

export const CustomLoginIcon = styled(LogIn)<{ isUserAuthenticated?: boolean }>`
  ${CommonNavigationIconStyles}
  display: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'none' : 'block')};
`;

export const CustomWorkoutsInfoIcon = styled(InfoCircle)<{ isUserAuthenticated?: boolean }>`
  ${CommonNavigationIconStyles}
  display: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'block' : 'none')};
`;

export const CustomBMICalculatorIcon = styled(Body)<{ isUserAuthenticated?: boolean }>`
  ${CommonNavigationIconStyles}
  display: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'block' : 'none')};
`;

export const CustomQuizIcon = styled(QuizNew)<{ isUserAuthenticated?: boolean }>`
  ${CommonNavigationIconStyles}
  display: ${({ isUserAuthenticated }) => (isUserAuthenticated ? 'block' : 'none')};
`;
