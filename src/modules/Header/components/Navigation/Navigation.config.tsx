import firebase from 'firebase/app';

import { AppRoutes } from '../../../../App.enums';
import { authService } from '../../../Auth/Auth.service';
import { CustomDumbbellIcon, CustomHomeIcon, CustomLogoutIcon } from '../../Header.styled';
import { NavigationConfiguration } from './Navigation.interface';

export function navigationConfig(currentUser: firebase.User): NavigationConfiguration[] {
  return [
    {
      id: 0,
      navigationIcon: <CustomHomeIcon />,
      url: AppRoutes.Home,
      'data-tip': 'Home',
    },
    {
      id: 1,
      navigationIcon: <CustomDumbbellIcon />,
      url: AppRoutes.Workouts,
      'data-tip': 'Workouts',
    },
    currentUser && {
      id: 2,
      navigationIcon: <CustomLogoutIcon />,
      url: AppRoutes.Login,
      'data-tip': 'Logout',
      onClick: () => authService.logout(),
    },
  ];
}
