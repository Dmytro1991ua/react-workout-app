import React, { useContext } from 'react';

import { BurgerMenu } from '../styles/HeaderStyles.styled';
import { WorkoutsContext } from '../WorkoutsContext';

const BurgerIcon = () => {
  //destructure burger menu and navigation "state"
  const { show } = useContext(WorkoutsContext);
  const [open, setOpen] = show;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <BurgerMenu onClick={handleClick}>
          <span />
          <span />
          <span />
        </BurgerMenu>
      )}
    </>
    //  <BurgerMenu open={open} onClick={handleClick}>
    //   <span />
    //   <span />
    //   <span />
    // </BurgerMenu>
  );
};

export default BurgerIcon;
