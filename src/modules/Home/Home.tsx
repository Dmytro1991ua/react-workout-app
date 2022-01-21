import React, { ReactElement } from 'react';

import { HomeBtn, HomeSection, HomeSectionBody, HomeTitle } from './HomeStyles.styled';

import Slider from './components/Slider/Slider';
import './components/Slider/Slider.css';
import SectionsTitle from '../../components/SectionTitle/SectionsTitle';

const Home = (): ReactElement => {
  return (
    <HomeSection>
      <HomeSectionBody>
        <HomeTitle>
          <SectionsTitle title="The workout is a vital part of your life. Don't mess it up" color='#fff' />
        </HomeTitle>
        <HomeBtn to='/workouts'>Check Your Workout</HomeBtn>
      </HomeSectionBody>
      <Slider />
    </HomeSection>
  );
};

export default Home;
