import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../AuthContext';
import { LinkLogout, List, ListItem, ListLink } from '../styles/HeaderStyles.styled';
import { WorkoutsContext } from '../WorkoutsContext';

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
    history.push('/login');
  };
  return (
    <List open={open}>
      <ListItem>
        <ListLink to='/' onClick={handleClick}>
          Home
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to='/workouts' onClick={handleClick}>
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
