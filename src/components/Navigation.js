import React, { useContext } from "react";
import { List, ListItem, ListLink } from "../styles/HeaderStyles";
import { WorkoutsContext } from "../WorkoutsContext";

const Navigation = () => {
  //destructure burger menu and navigation "state"
  const { show } = useContext(WorkoutsContext);
  const [open, setOpen] = show;

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List open={open}>
      <ListItem>
        <ListLink to="/" onClick={handleClick}>
          Home
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/workouts" onClick={handleClick}>
          Workouts
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/login" onClick={handleClick}>
          Sign In
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/signup" onClick={handleClick}>
          Sign Up
        </ListLink>
      </ListItem>
    </List>
  );
};

export default Navigation;
