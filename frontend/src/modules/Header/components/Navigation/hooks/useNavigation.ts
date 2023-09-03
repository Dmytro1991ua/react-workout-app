import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/store.hooks';
import { selectCurrentUser, selectIsUserAuthenticated } from '../../../../Auth/User.slice';
import { navigationConfig } from '../Navigation.config';
import { generateNavigation } from '../Navigation.utils';

type ReturnedHookType = {
  navigationLinks: JSX.Element[];
  isUserAuthenticated: boolean;
};

export const useNavigation = (): ReturnedHookType => {
  const location = useLocation<Location>();

  const isUserAuthenticated = useAppSelector(selectIsUserAuthenticated);
  const currentUser = useAppSelector(selectCurrentUser);

  const navigationLinksConfig = useMemo(
    () => navigationConfig(isUserAuthenticated, currentUser?.photoURL as string),
    [isUserAuthenticated, currentUser?.photoURL]
  );

  const navigationLinks = useMemo(
    () => generateNavigation(navigationLinksConfig, location),
    [navigationLinksConfig, location]
  );

  return {
    navigationLinks,
    isUserAuthenticated,
  };
};
