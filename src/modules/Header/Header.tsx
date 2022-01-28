import { Link } from 'react-router-dom';

import { colors, Container } from '../../global-styles/Global.styled';
import { HeaderSection, HeaderSectionBody, Logo } from './Header.styled';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import Navigation from './components/Navigation/Navigation';
import LogoImg from '../../assets/images/logo.png';
import { AppRoutes } from '../../App.enums';
import Tooltip from '../../components/Tooltip/Tooltip';

const Header = () => {
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
          <BurgerIcon />
          <Navigation />
        </HeaderSectionBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
