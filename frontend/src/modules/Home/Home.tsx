import React, { ReactElement } from 'react';

import { AppRoutes } from '../../App.enums';
import SectionsTitle from '../../components/SectionTitle/SectionsTitle';
import { colors } from '../../global-styles/ColorsPalette';
import SectionsLayout from '../../layouts/SectionsLayout/SectionsLayout';
import {
  CommonSectionsBody,
  CommonSectionsBtn,
  CommonSectionsTitle,
} from '../../layouts/SectionsLayout/SectionsLayout.styled';
import Slider from './components/Slider/Slider';

const Home = (): ReactElement => {
  return (
    <SectionsLayout sectionName='Home'>
      <CommonSectionsBody>
        <CommonSectionsTitle>
          <SectionsTitle title="The workout is a vital part of your life. Don't mess it up" color={colors.white} />
        </CommonSectionsTitle>
        <CommonSectionsBtn to={{ pathname: AppRoutes.Workouts }}>Check Your Workout</CommonSectionsBtn>
      </CommonSectionsBody>
      <Slider />
    </SectionsLayout>
  );
};

export default Home;
