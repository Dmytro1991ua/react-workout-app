import React, { ReactElement } from 'react';

import { HomeBtn, HomeSection, HomeSectionBody, HomeTitle } from './Home.styled';

import Slider from './components/Slider/Slider';
import './components/Slider/Slider.css';
import SectionsTitle from '../../components/SectionTitle/SectionsTitle';
import { AppRoutes } from '../../App.enums';
import { colors } from '../../global-styles/Global.styled';

const Home = (): ReactElement => {
  return (
    <HomeSection>
      <HomeSectionBody>
        <HomeTitle>
          <SectionsTitle title="The workout is a vital part of your life. Don't mess it up" color={colors.white} />
        </HomeTitle>
        <HomeBtn to={{ pathname: AppRoutes.Workouts }}>Check Your Workout</HomeBtn>
      </HomeSectionBody>
      <Slider />
    </HomeSection>
  );
};

export default Home;
