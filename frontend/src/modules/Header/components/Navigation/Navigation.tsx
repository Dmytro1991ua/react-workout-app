import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { colors } from '../../../../global-styles/ColorsPalette';
import { selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { List, ListItem } from '../../Header.styled';
import Tooltip from './../../../../components/Tooltip/Tooltip';
import { useAppSelector } from './../../../../store/store.hooks';
import { navigationConfig } from './Navigation.config';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation = ({ isOpen }: NavigationProps): ReactElement => {
  const currentUser = useAppSelector(selectIsUserAuthenticated);

  const navigationConfigs = navigationConfig(currentUser);

  return (
    <List open={isOpen}>
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
