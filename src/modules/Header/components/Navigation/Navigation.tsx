import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from '../../Header.styled';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { navigationConfig } from './Navigation.config';
import Tooltip from './../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../global-styles/Global.styled';
import { AuthContext } from './../../../../context/AuthContext';

const Navigation = () => {
  //destructure burger menu and navigation "state"
  const { currentUser } = useContext(AuthContext);
  const { show } = useContext(WorkoutsContext);
  const [open] = show;

  const navigationConfigs = navigationConfig(currentUser);

  return (
    <List open={open}>
      {navigationConfigs.map((navLink) => {
        return (
          <ListItem key={navLink && navLink.id}>
            <Link
              key={navLink && navLink.id}
              data-tip={navLink && navLink['data-tip']}
              to={{ pathname: navLink && navLink.url }}
              onClick={navLink && navLink.onClick}
            >
              {navLink && navLink.navigationIcon}
            </Link>
            <Tooltip
              effect='solid'
              backgroundColor={colors.mantisDarker}
              textColor={colors.darkBlue}
              border={true}
              borderColor={colors.white}
              arrowColor={colors.mantisDarker}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default Navigation;
