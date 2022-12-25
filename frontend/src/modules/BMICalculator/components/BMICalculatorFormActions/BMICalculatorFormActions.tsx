import React, { ReactElement } from 'react';
import { UseFormReset } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import { BMICalculatorFormInitialValues } from '../BMICalculatorForm/BMICalculator.interfaces';
import { FormActionsWrapper, ResetButton } from './BMICalculatorFormActions.styled';

interface BMICalculatorFormActionsProps {
  isButtonDisabled: boolean;
  onResetForm: UseFormReset<BMICalculatorFormInitialValues>;
  onSubmit: () => void;
}

const BMICalculatorFormActions = ({
  isButtonDisabled,
  onResetForm,
  onSubmit,
}: BMICalculatorFormActionsProps): ReactElement => {
  return (
    <FormActionsWrapper>
      <ResetButton
        type='button'
        fullWidth
        backgroundColor='white'
        hoverColor='lighterBlue'
        color='mantis'
        disabled={isButtonDisabled}
        onClick={onResetForm}
      >
        Reset
      </ResetButton>
      <Button
        type='submit'
        fullWidth
        disabled={isButtonDisabled}
        backgroundColor='mantis'
        hoverColor='mantisDarker'
        color='white'
        onClick={onSubmit}
      >
        Calculate
      </Button>
    </FormActionsWrapper>
  );
};

export default BMICalculatorFormActions;
