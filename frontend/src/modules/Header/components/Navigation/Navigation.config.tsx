import { v4 as uuidv4 } from 'uuid';

import { AppRoutes } from '../../../../App.enums';
import { authService } from '../../../Auth/Auth.service';
import { CustomDumbbellIcon, CustomHomeIcon, CustomLoginIcon, CustomLogoutIcon, UserImage } from '../../Header.styled';
import { NavigationConfiguration } from './Navigation.interface';

export function navigationConfig(isUserAuthenticated: boolean, userPhoto: string): NavigationConfiguration[] {
  return [
    {
      id: uuidv4(),
      navigationIcon: <CustomHomeIcon />,
      url: AppRoutes.Home,
      'data-tip': 'Home',
    },
    {
      id: uuidv4(),
      navigationIcon: <CustomDumbbellIcon isUserAuthenticated={Boolean(isUserAuthenticated)} />,
      url: AppRoutes.Workouts,
      'data-tip': 'Workouts',
    },
    {
      id: uuidv4(),
      navigationIcon: <CustomLogoutIcon isUserAuthenticated={Boolean(isUserAuthenticated)} />,
      url: AppRoutes.Login,
      'data-tip': 'Logout',
      onClick: async () => {
        await authService.logout();
      },
    },
    {
      id: uuidv4(),
      navigationIcon: <CustomLoginIcon isUserAuthenticated={Boolean(isUserAuthenticated)} />,
      url: AppRoutes.Login,
      'data-tip': 'LogIn',
    },
    {
      id: uuidv4(),
      navigationIcon: <UserImage src={userPhoto} alt='User Image' isUserAuthenticated={Boolean(isUserAuthenticated)} />,
      url: AppRoutes.Profile,
      'data-tip': 'Profile',
    },
  ];
}
