import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import { Container } from '../../global-styles/Global.styled';
import { HeaderSection, HeaderSectionBody, Logo } from './Header.styled';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import Navigation from './components/Navigation/Navigation';
import LogoImg from '../../assets/images/logo.png';
import { AppRoutes } from '../../App.enums';
import Tooltip from '../../components/Tooltip/Tooltip';
import { colors } from '../../global-styles/ColorsPalette';
import { WorkoutsContext } from '../../context/WorkoutsContext';
import useGeolocation from '../../hooks/useGeolocation';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

const Header = () => {
  const { currentWorkoutWeather } = useContext(WorkoutsContext);

  const [currentWeather] = currentWorkoutWeather;

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
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <Navigation isOpen={isBurgerIconOpened} />
            {currentLocation.loaded && !!currentWeather && <WeatherWidget currentWeather={currentWeather} />}
          </div>
        </HeaderSectionBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
