import { Link } from 'react-router-dom';

import { Container } from '../styles/GlobalStyles.styled';
import { HeaderSection, HeaderSectionBody, Logo } from '../styles/HeaderStyles.styled';
import BurgerIcon from './BurgerIcon';
import Navigation from './Navigation';
import LogoImg from '../assets/images/logo.png';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderSectionBody>
          <Link to='/'>
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
