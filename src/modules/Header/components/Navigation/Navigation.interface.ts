import { AppRoutes } from '../../../../App.enums';

export interface NavigationConfiguration {
  id: string;
  navigationIcon: JSX.Element;
  url: AppRoutes;
  ['data-tip']: string;
  onClick?: () => void;
}
