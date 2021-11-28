import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../styles/GlobalStyles';
import { HeaderSection, HeaderSectionBody, Logo } from '../styles/HeaderStyles';
import BurgerIcon from './BurgerIcon';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderSectionBody>
          <Link to='/'>
            <Logo src={require('../images/logo.png').default} />
          </Link>
          <BurgerIcon />
          <Navigation />
        </HeaderSectionBody>
      </Container>
    </HeaderSection>
  );
};

export default Header;
