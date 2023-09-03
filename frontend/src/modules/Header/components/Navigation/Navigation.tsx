import React, { ReactElement } from 'react';

import { List } from '../../Header.styled';
import { useNavigation } from './hooks/useNavigation';

interface NavigationProps {
  isOpen: boolean;
}

const Navigation = ({ isOpen }: NavigationProps): ReactElement => {
  const { isUserAuthenticated, navigationLinks } = useNavigation();

  return (
    <List open={isOpen} isUserAuthenticated={Boolean(isUserAuthenticated)}>
      {navigationLinks}
    </List>
  );
};

export default Navigation;
