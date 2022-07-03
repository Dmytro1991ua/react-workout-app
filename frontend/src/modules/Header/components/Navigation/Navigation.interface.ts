import { AppRoutes } from '../../../../App.enums';

export interface NavigationConfiguration {
  id: string;
  navigationIcon: JSX.Element | null;
  url: AppRoutes;
  ['data-tip']: string;
  onClick?: () => void;
}

export interface NavigationConfigsProps {
  authenticatedUser: boolean;
  photoUrl: string;
  imageSrc: string;
  onSetImageSrc: (value: string) => void;
}
