import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from '../../Header.styled';
import { navigationConfig } from './Navigation.config';
import Tooltip from './../../../../components/Tooltip/Tooltip';

import { colors } from '../../../../global-styles/ColorsPalette';
import { useAppSelector } from './../../../../store/store.hooks';
import { selectIsUserAuthenticated, selectUserLoading } from '../../../Auth/Auth.slice';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation = ({ isOpen }: NavigationProps): ReactElement => {
  const currentUser = useAppSelector(selectIsUserAuthenticated);
  const isUserLoading = useAppSelector(selectUserLoading);

  const navigationConfigs = navigationConfig(currentUser, isUserLoading);

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
