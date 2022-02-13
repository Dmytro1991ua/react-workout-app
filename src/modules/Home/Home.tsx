import React, { ReactElement } from 'react';

import SectionsTitle from '../../components/SectionTitle/SectionsTitle';
import { AppRoutes } from '../../App.enums';
import { colors } from '../../global-styles/Global.styled';
import {
  CommonSectionsBody,
  CommonSectionsBtn,
  CommonSectionsTitle,
} from '../../layouts/SectionsLayout/SectionsLayout.styled';
import SectionsLayout from '../../layouts/SectionsLayout/SectionsLayout';
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
