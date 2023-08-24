import React, { ReactElement, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { selectCurrentUser, selectIsUserAuthenticated } from '../../../Auth/User.slice';
import { List } from '../../Header.styled';
import { useAppSelector } from './../../../../store/store.hooks';
import { Location } from './Navigation.interface';
import { generateNavigation } from './Navigation.utils';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation = ({ isOpen }: NavigationProps): ReactElement => {
  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const location = useLocation<Location>();
  const currentUser = useAppSelector(selectCurrentUser);

  const navigationLinks = useMemo(
    () => generateNavigation({ isUserAuthenticated, userPhoto: currentUser?.photoURL as string, location }),
    []
  );

  return (
    <List open={isOpen} isUserAuthenticated={Boolean(isUserAuthenticated)}>
      {navigationLinks}
    </List>
  );
};

export default Navigation;
