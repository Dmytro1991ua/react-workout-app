import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

import { colors } from '../../../../global-styles/ColorsPalette';
import { selectCurrentUser, selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { List, ListItem, ListLink } from '../../Header.styled';
import Tooltip from './../../../../components/Tooltip/Tooltip';
import { useAppSelector } from './../../../../store/store.hooks';
import { navigationConfig } from './Navigation.config';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation = ({ isOpen }: NavigationProps): ReactElement => {
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const location = useLocation();
  const currentUser = useAppSelector(selectCurrentUser);

  const navigationConfigs = navigationConfig(isUserAuthenticated, currentUser?.photoURL as string);

  return (
    <List open={isOpen} isUserAuthenticated={Boolean(isUserAuthenticated)}>
      {navigationConfigs.map((navLink) => {
        return (
          <ListItem key={navLink && navLink.id}>
            <ListLink
              key={navLink && navLink.id}
              data-tip={navLink && navLink['data-tip']}
              to={{ pathname: navLink && navLink.url }}
              onClick={navLink && navLink.onClick}
              $isActive={location.pathname === navLink.url}
            >
              {navLink && navLink.navigationIcon}
            </ListLink>
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
