import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../App.enums';
import LogoImg from '../../assets/images/logo.png';
import Tooltip from '../../components/Tooltip/Tooltip';
import { colors } from '../../global-styles/ColorsPalette';
import { Container } from '../../global-styles/Global.styled';
import useGeolocation from '../../hooks/useGeolocation';
import { useAppSelector } from '../../store/store.hooks';
import { selectWeatherDetailsBasedOnLocation } from '../WeatherDetails/WeatherDetails.slice';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import Navigation from './components/Navigation/Navigation';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import { HeaderSection, HeaderSectionBody, Logo, NavigationWrapper } from './Header.styled';

const Header = (): ReactElement => {
  const weatherBasedOnCurrentLocation = useAppSelector(selectWeatherDetailsBasedOnLocation);

  const currentLocation: CurrentLocationData = useGeolocation();

  const [isBurgerIconOpened, setIsBurgerIconOpened] = useState(false);

  function handleOpenBurgerMenu(): void {
    setIsBurgerIconOpened(!isBurgerIconOpened);
  }

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
          <BurgerIcon isOpen={isBurgerIconOpened} onClick={handleOpenBurgerMenu} />
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
