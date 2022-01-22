import { AppRoutes } from '../../../../App.enums';

export interface NavigationConfiguration {
  id: number;
  navigationIcon: JSX.Element;
  url: AppRoutes;
  onClick?: () => void;
}
