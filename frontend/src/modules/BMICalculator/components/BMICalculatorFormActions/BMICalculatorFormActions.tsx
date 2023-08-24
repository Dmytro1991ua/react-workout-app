import React, { ReactElement, useMemo } from 'react';
import { UseFormReset } from 'react-hook-form';

import { BMICalculatorFormInitialValues } from '../../BMICalculator.interfaces';
import { generateFormActionButtons } from '../../BMICalculator.utils';
import { FormActionsWrapper } from './BMICalculatorFormActions.styled';

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
  const formActionButtons = useMemo(
    () => generateFormActionButtons({ isButtonDisabled, onResetForm, onSubmit }),
    [isButtonDisabled, onResetForm, onSubmit]
  );

  return <FormActionsWrapper>{formActionButtons}</FormActionsWrapper>;
};

export default BMICalculatorFormActions;
