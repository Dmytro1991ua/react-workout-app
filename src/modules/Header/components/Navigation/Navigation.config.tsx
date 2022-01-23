import { AppRoutes } from '../../../../App.enums';
import { authService } from '../../../Auth/components/Auth.service';
import { CustomDumbbellIcon, CustomHomeIcon, CustomLogoutIcon } from '../../HeaderStyles.styled';
import { NavigationConfiguration } from './Navigation.interface';

export const navigationConfig: NavigationConfiguration[] = [
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
  {
    id: 2,
    navigationIcon: <CustomLogoutIcon />,
    url: AppRoutes.Login,
    'data-tip': 'Logout',
    onClick: () => authService.logout(),
  },
];
