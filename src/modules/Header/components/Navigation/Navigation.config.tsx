import { v4 as uuidv4 } from 'uuid';

import { AppRoutes } from '../../../../App.enums';
import { authService } from '../../../Auth/Auth.service';
import { CustomDumbbellIcon, CustomHomeIcon, CustomLogoutIcon } from '../../Header.styled';
import { NavigationConfiguration } from './Navigation.interface';

export function navigationConfig(currentUser: boolean, isUserLoading: boolean): NavigationConfiguration[] {
  return [
    {
      id: uuidv4(),
      navigationIcon: <CustomHomeIcon />,
      url: AppRoutes.Home,
      'data-tip': 'Home',
    },
    {
      id: uuidv4(),
      navigationIcon: <CustomDumbbellIcon />,
      url: AppRoutes.Workouts,
      'data-tip': 'Workouts',
    },
    {
      id: uuidv4(),
      navigationIcon: currentUser || isUserLoading ? <CustomLogoutIcon /> : null,
      url: AppRoutes.Login,
      'data-tip': 'Logout',
      onClick: async () => {
        await authService.logout();
      },
    },
  ];
}
