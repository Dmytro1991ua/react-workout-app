import React, { useContext } from "react";
import { BurgerMenu } from "../styles/HeaderStyles";
import { WorkoutsContext } from "../WorkoutsContext";

const BurgerIcon = () => {
  //destructure burger menu and navigation "state"
  const { show } = useContext(WorkoutsContext);
   const [open, setOpen] = show;
   
   const handleClick = () => {
      setOpen(!open);
   };

  return (
    <BurgerMenu open={open} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </BurgerMenu>
  );
};

export default BurgerIcon;
