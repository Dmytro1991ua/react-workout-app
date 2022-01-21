import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../../context/AuthContext';
import { LinkLogout, List, ListItem, ListLink } from '../../../../styles/HeaderStyles.styled';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { AppRoutes } from '../../../../App.enums';

const Navigation = () => {
  //destructure burger menu and navigation "state"
  const { show } = useContext(WorkoutsContext);
  const [open, setOpen] = show;
  const { logout } = useAuth();
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.href = "/";
  // }

  /*

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

  */

  const handleLogout = () => {
    logout();
    history.push(AppRoutes.Login);
  };

  return (
    <List open={open}>
      <ListItem>
        <ListLink to={{ pathname: AppRoutes.Home }} onClick={handleClick}>
          Home
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to={{ pathname: AppRoutes.Workouts }} onClick={handleClick}>
          Workouts
        </ListLink>
      </ListItem>
      <ListItem>
        <LinkLogout
          href='#'
          onClick={() => {
            handleClick();
            handleLogout();
          }}
        >
          Logout
        </LinkLogout>
      </ListItem>
    </List>
  );
};

export default Navigation;
