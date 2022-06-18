import React, { ReactElement } from 'react';

import { BurgerMenu } from './BurgerIcon.styled';

interface BurgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerIcon = ({ isOpen, onClick }: BurgerIconProps): ReactElement => {
  return (
    <BurgerMenu open={isOpen} onClick={onClick}>
      <span />
      <span />
      <span />
    </BurgerMenu>
  );
};

export default BurgerIcon;
