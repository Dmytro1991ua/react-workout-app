import { AppRoutes } from '../../../../App.enums';
import { authService } from '../../../Auth/components/Auth.service';
import { CustomDumbbellIcon, CustomHomeIcon, CustomLogoutIcon } from '../../HeaderStyles.styled';
import { NavigationConfiguration } from './Navigation.interface';

export const navigationConfig: NavigationConfiguration[] = [
  {
    id: 0,
    navigationIcon: <CustomHomeIcon />,
    url: AppRoutes.Home,
  },
  {
    id: 1,
    navigationIcon: <CustomDumbbellIcon />,
    url: AppRoutes.Workouts,
  },
  {
    id: 2,
    navigationIcon: <CustomLogoutIcon />,
    url: AppRoutes.Login,
    onClick: () => authService.logout(),
  },
];
