import styled from 'styled-components';

export const BurgerMenu = styled('div')<{ open?: boolean }>`
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
    background-color: ${({ open }) => (open ? '#ffff' : '#7ac142')};
    transform-origin: 3.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 28em) {
    display: none;
  }
`;
