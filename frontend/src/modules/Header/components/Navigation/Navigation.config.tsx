import { v4 as uuidv4 } from 'uuid';

import { AppRoutes, UserImageSize } from '../../../../App.enums';
import FallbackImage from '../../../../components/FallbackImage/FallbackImage';
import { authService } from '../../../Auth/Auth.service';
import {
  CustomDumbbellIcon,
  CustomHomeIcon,
  CustomLoginIcon,
  CustomLogoutIcon,
  CustomWorkoutsInfoIcon,
} from '../../Header.styled';
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
      navigationIcon: <CustomWorkoutsInfoIcon isUserAuthenticated={Boolean(isUserAuthenticated)} />,
      url: AppRoutes.WorkoutsDetails,
      'data-tip': 'Workouts Details',
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
      navigationIcon: (
        <FallbackImage
          imageUrl={userPhoto}
          size={UserImageSize.Small}
          altText="User's profile photo"
          isUserAuthenticated={Boolean(isUserAuthenticated)}
        />
      ),
      url: AppRoutes.Profile,
      'data-tip': 'Profile',
    },
  ];
}
