import Tooltip from '../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../global-styles/ColorsPalette';
import { ListItem, ListLink } from '../../Header.styled';
import { Location, NavigationConfiguration } from './Navigation.interface';

export const generateNavigation = (config: NavigationConfiguration[], location: Location): JSX.Element[] =>
  config.map(({ id, navigationIcon, url, 'data-tip': dataTip, onClick }) => (
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
