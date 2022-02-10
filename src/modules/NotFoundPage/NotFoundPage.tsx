import React, { ReactElement } from 'react';
import { AppRoutes } from '../../App.enums';

import SectionsTitle from '../../components/SectionTitle/SectionsTitle';
import { colors } from '../../global-styles/Global.styled';
import SectionsLayout from '../../layouts/SectionsLayout/SectionsLayout';
import {
  CommonSectionsBody,
  CommonSectionsBtn,
  CommonSectionsTitle,
} from '../../layouts/SectionsLayout/SectionsLayout.styled';

const NotFoundPage = (): ReactElement => {
  return (
    <SectionsLayout>
      <CommonSectionsBody>
        <CommonSectionsTitle>
          <SectionsTitle title='Oh Boy! Page Not Found' color={colors.mantis} />
        </CommonSectionsTitle>
        <CommonSectionsBtn sectionName='Not Found' to={{ pathname: AppRoutes.Home }}>
          Come back Home
        </CommonSectionsBtn>
      </CommonSectionsBody>
    </SectionsLayout>
  );
};

export default NotFoundPage;
