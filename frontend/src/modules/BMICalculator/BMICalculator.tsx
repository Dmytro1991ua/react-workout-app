import React, { ReactElement } from 'react';

import { PAGE_SUBTITLE, PAGE_TITLE } from './BMICalculator.constants';
import { BMICalculatorSection, ContentWrapper, Subtitle, Title } from './BMICalculator.styled';
import BMICalculatorForm from './components/BMICalculatorForm/BMICalculatorForm';

const BMICalculator = (): ReactElement => {
  return (
    <BMICalculatorSection>
      <ContentWrapper>
        <Title>{PAGE_TITLE}</Title>
        <Subtitle>{PAGE_SUBTITLE}</Subtitle>
        <BMICalculatorForm />
      </ContentWrapper>
    </BMICalculatorSection>
  );
};

export default BMICalculator;
