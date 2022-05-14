import styled from 'styled-components';
import { Dumbbell } from '@styled-icons/fluentui-system-filled/Dumbbell';

import { fadeInDown } from '../../global-styles/Global.styled';

import { LogOut } from 'styled-icons/boxicons-regular';
import { Home } from 'styled-icons/entypo';
import { colors } from '../../global-styles/ColorsPalette';

const CommonNavigationIconStyles = `
  fill: ${colors.mantis};
  width: 3rem;
  transition: all 0.3s ease-in-out;

  :hover {
    fill: ${colors.white};
}`;

export const HeaderSection = styled.header`
  background-color: ${colors.lighterBlue};
  padding: 0.4rem 0rem;
  position: fixed;
  width: 100%;
  z-index: 3;
  border-bottom: 4px solid ${colors.mantis};
  transition: all 0.3s ease-out;
  animation: ${fadeInDown} 0.4s ease-in-out;

  @media (min-width: 48em) {
    padding: 0.6rem 0rem;
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
export const List = styled('ul')<{ open?: boolean }>`
  position: absolute;
  top: 6.2rem;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.lighterBlue};
  border-right: 5px solid ${colors.mantis};
  padding: 7rem 2rem 2rem 2rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-200%)')};
  transition: all 0.3s ease-in-out;
  margin-right: 2rem;

  @media (min-width: 48em) {
    position: relative;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background-color: transparent;
    border-right: 5px solid transparent;
    padding: 0rem 0rem 0rem 0rem;
    transform: translateX(0);
    transition: none;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  @media (min-width: 48em) {
    &:not(:last-child) {
      margin-right: 3rem;
      margin-bottom: 0rem;
    }
  }
`;

export const CustomDumbbellIcon = styled(Dumbbell)`
  ${CommonNavigationIconStyles}
`;

export const CustomHomeIcon = styled(Home)`
  ${CommonNavigationIconStyles}
`;

export const CustomLogoutIcon = styled(LogOut)`
  ${CommonNavigationIconStyles}
`;
