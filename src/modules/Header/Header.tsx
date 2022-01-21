import { Link } from 'react-router-dom';

import { Container } from '../../styles/GlobalStyles.styled';
import { HeaderSection, HeaderSectionBody, Logo } from '../../styles/HeaderStyles.styled';
import BurgerIcon from './components/BurgerIcon/BurgerIcon';
import Navigation from './components/Navigation/Navigation';
import LogoImg from '../../assets/images/logo.png';
import { AppRoutes } from '../../App.enums';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderSectionBody>
          <Link to={{ pathname: AppRoutes.Home }}>
            <Logo src={LogoImg} />
          </Link>
          <BurgerIcon />
          <Navigation />
        </HeaderSectionBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
