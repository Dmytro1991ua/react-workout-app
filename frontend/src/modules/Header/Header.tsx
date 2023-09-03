import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../App.enums';
import LogoImg from '../../assets/images/logo.png';
import Tooltip from '../../components/Tooltip/Tooltip';
import { colors } from '../../global-styles/ColorsPalette';
import { Container } from '../../global-styles/Global.styled';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import Navigation from './components/Navigation/Navigation';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import { HeaderSection, HeaderSectionBody, Logo, NavigationWrapper } from './Header.styled';
import { useHeader } from './hooks/useHeader';

const Header = (): ReactElement => {
  const { currentLocation, isBurgerIconOpened, onOpenBurgerMenu, weatherBasedOnCurrentLocation } = useHeader();

  return (
    <HeaderSection>
      <Container>
        <HeaderSectionBody>
          <Link data-tip='Your workout buddy' to={{ pathname: AppRoutes.Home }}>
            <Logo src={LogoImg} />
          </Link>
          <Tooltip
            effect='solid'
            backgroundColor={colors.mantisDarker}
            textColor={colors.darkBlue}
            border={true}
            borderColor={colors.white}
            arrowColor={colors.mantisDarker}
          />
          <BurgerIcon isOpen={isBurgerIconOpened} onClick={onOpenBurgerMenu} />
          <NavigationWrapper>
            <Navigation isOpen={isBurgerIconOpened} />
            {currentLocation.loaded && Boolean(weatherBasedOnCurrentLocation) && (
              <WeatherWidget currentWeather={weatherBasedOnCurrentLocation} />
            )}
          </NavigationWrapper>
        </HeaderSectionBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
