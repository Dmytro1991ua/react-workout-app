import React, { ReactElement, useMemo } from 'react';
import { UseFormReset } from 'react-hook-form';

import { generateFormActionButtons } from '../../../../utils';
import { formActionsButtonsConfig } from '../../BMICalculator.configs';
import { BMICalculatorFormInitialValues } from '../../BMICalculator.interfaces';
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
  const actionButtonsConfig = formActionsButtonsConfig({ isButtonDisabled, onResetForm, onSubmit });
  const formActionButtons = useMemo(() => generateFormActionButtons(actionButtonsConfig), [actionButtonsConfig]);

  return <FormActionsWrapper>{formActionButtons}</FormActionsWrapper>;
};

export default BMICalculatorFormActions;
