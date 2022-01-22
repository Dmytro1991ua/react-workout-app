import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { List, ListItem } from '../../HeaderStyles.styled';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { navigationConfig } from './Navigation.config';

const Navigation = () => {
  //destructure burger menu and navigation "state"
  const { show } = useContext(WorkoutsContext);
  const [open] = show;

  return (
    <List open={open}>
      {navigationConfig.map((navLink) => {
        return (
          <ListItem>
            <Link key={navLink.id} to={{ pathname: navLink.url }} onClick={navLink.onClick}>
              {navLink.navigationIcon}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Navigation;
