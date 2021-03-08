import { Link } from "react-router-dom";
import styled from "styled-components";
import {fadeInDown, colors } from "./GlobalStyles";

export const HeaderSection = styled.header`
  background-color: ${colors.lighterBlue};
  padding: 0.4rem 0rem;
  position: fixed;
  width: 100%;
  z-index: 3;
  border-bottom: 4px solid ${colors.mantis};
  transition: all 0.3s ease-out;
  animation: ${fadeInDown} 0.4s ease-in-out;

  @media (min-width: 45em) {
    padding: 0.6rem 0rem;
  }
`;

export const Logo = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;

  @media (min-width: 45em) {
    width: 6.5rem;
    height: 6.5rem;
  }
`;

export const HeaderSectionBody = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 24em) {
    flex-direction: row;
  }
`;

// Navigation
export const List = styled.ul`
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
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
  transition: all 0.3s ease-in-out;

  @media (min-width: 24em) {
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
  @media (min-width: 24em) {
    &:not(:last-child) {
      margin-right: 1rem;
      margin-bottom: 0rem;
    }
  }
`;
export const ListLink = styled(Link)`
  font-size: clamp(1.2rem, 1.8rem, 4rem);
  color: ${colors.mantis};
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  :hover {
    color: ${colors.white};
  }
`;

// Burger Menu
export const BurgerMenu = styled.div`
  width: 2rem;
  height: 2.5rem;
  position: fixed;
  top: 1.6rem;
  left: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 4;

  span {
    display: inline-block;
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ffff" : "#7ac142")};
    transform-origin: 3.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 24em) {
    display: none;
  }
`;
