import Tooltip from '../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../global-styles/ColorsPalette';
import { ListItem, ListLink } from '../../Header.styled';
import { navigationConfig } from './Navigation.config';
import { Location } from './Navigation.interface';

export const generateNavigation = ({
  isUserAuthenticated,
  location,
  userPhoto,
}: {
  isUserAuthenticated: boolean;
  userPhoto: string;
  location: Location;
}): JSX.Element[] => {
  const navigationLinks = navigationConfig(isUserAuthenticated, userPhoto);

  return navigationLinks.map(({ id, navigationIcon, url, 'data-tip': dataTip, onClick }) => (
    <ListItem key={id}>
      <ListLink
        key={id}
        data-tip={dataTip}
        to={{ pathname: url }}
        onClick={onClick}
        $isActive={location.pathname === url}
      >
        {navigationIcon}
      </ListLink>
      <Tooltip
        effect='solid'
        backgroundColor={colors.mantisDarker}
        textColor={colors.darkBlue}
        border={true}
        borderColor={colors.white}
        arrowColor={colors.mantisDarker}
      />
    </ListItem>
  ));
};
