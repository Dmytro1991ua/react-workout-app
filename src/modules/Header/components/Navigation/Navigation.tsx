import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from '../../Header.styled';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { navigationConfig } from './Navigation.config';
import Tooltip from './../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../global-styles/Global.styled';

const Navigation = () => {
  //destructure burger menu and navigation "state"
  const { show } = useContext(WorkoutsContext);
  const [open] = show;

  return (
    <List open={open}>
      {navigationConfig.map((navLink) => {
        return (
          <ListItem key={navLink.id}>
            <Link
              key={navLink.id}
              data-tip={navLink['data-tip']}
              to={{ pathname: navLink.url }}
              onClick={navLink.onClick}
            >
              {navLink.navigationIcon}
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
