import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../../../context/AuthContext';
import { CustomDumbbellIcon, CustomHomeIcon, CustomLogoutIcon, List, ListItem } from '../../HeaderStyles.styled';
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
    // history.push(AppRoutes.Login);
  };

  return (
    <List open={open}>
      <ListItem>
        <Link to={{ pathname: AppRoutes.Home }}>
          <CustomHomeIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link to={{ pathname: AppRoutes.Workouts }}>
          <CustomDumbbellIcon />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          to={{ pathname: AppRoutes.Login }}
          onClick={() => {
            handleLogout();
          }}
        >
          <CustomLogoutIcon />
        </Link>
      </ListItem>
    </List>
  );
};

export default Navigation;
