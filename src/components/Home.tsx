import React from 'react';
import { HomeBtn, HomeSection, HomeSectionBody, HomeTitle } from '../styles/HomeStyles';
import SectionsTitle from './SectionsTitle';
import Slider from './Slider';
import '../styles/Slider.css';

const Home = () => {
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
