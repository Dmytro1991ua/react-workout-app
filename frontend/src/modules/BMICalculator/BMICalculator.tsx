import React, { ReactElement } from 'react';

import { BMICalculatorSection, ContentWrapper, Subtitle, Title } from './BMICalculator.styled';
import BMICalculatorForm from './components/BMICalculatorForm/BMICalculatorForm';

const BMICalculator = (): ReactElement => {
  return (
    <BMICalculatorSection>
      <ContentWrapper>
        <Title>BMI Calculator</Title>
        <Subtitle>Keep in an eye on your healthiness</Subtitle>
        <BMICalculatorForm />
      </ContentWrapper>
    </BMICalculatorSection>
  );
};

export default BMICalculator;
