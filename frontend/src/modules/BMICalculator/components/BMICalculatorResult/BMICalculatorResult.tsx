import React, { ReactElement } from 'react';

import Button from '../../../../components/Button/Button';
import { BmiMessageResult } from '../../BMICalculator.enums';
import { BmiImageResult } from '../../BMICalculator.interfaces';
import { Title } from './../../BMICalculator.styled';
import { Image, ResultSubtitle, SectionHeader, SectionWrapper } from './BMICalculatorResult.styled';

interface BMICalculatorResultProps {
  bmiResult: string;
  bmiResultMessage: BmiMessageResult;
  bmiResultImage: BmiImageResult;
  onResetBmiResult: () => void;
}

const BMICalculatorResult = ({
  bmiResult,
  bmiResultMessage,
  bmiResultImage,
  onResetBmiResult,
}: BMICalculatorResultProps): ReactElement => {
  return (
    <SectionWrapper>
      <SectionHeader>
        <div>
          <Title>Your BMI is: {bmiResult}</Title>
          <ResultSubtitle>{bmiResultMessage}</ResultSubtitle>
        </div>
        <Button
          type='reset'
          backgroundColor='mantis'
          hoverColor='mantisDarker'
          color='white'
          onClick={onResetBmiResult}
        >
          Reset
        </Button>
      </SectionHeader>
      <figure>
        <Image src={bmiResultImage.imagePath} alt={bmiResultImage.imageAlt} />
      </figure>
    </SectionWrapper>
  );
};

export default BMICalculatorResult;
