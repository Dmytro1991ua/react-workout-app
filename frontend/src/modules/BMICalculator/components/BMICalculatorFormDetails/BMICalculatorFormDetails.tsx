import React, { ReactElement } from 'react';

import { generateFormInputs, generateFormSelects } from '../../../../utils';
import { formInputsConfig, formSelectsConfig } from '../../BMICalculator.configs';
import { HeightUnitsSelectOptions } from '../../BMICalculator.enums';
import { BMICalculatorFormInitialValues } from '../../BMICalculator.interfaces';
import { InchesSelectWrapper } from '../BMICalculatorForm/BMICalculatorForm.styled';
import { useBMICalculations } from '../BMICalculatorForm/hooks/useBMICalculations';
import { useDisabledSelectOption } from '../BMICalculatorForm/hooks/useDisabledSelectOption';
import { FormDetailsWrapper, InputWrapper, SelectWrapper } from './BMICalculatorFormDetails.styled';

interface FormDetailsProps {
  formData: BMICalculatorFormInitialValues;
  onHandleFormFieldsChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

const BMICalculatorFormDetails = ({ formData, onHandleFormFieldsChange }: FormDetailsProps): ReactElement => {
  const {
    isFeetDefaultOptionDisabled,
    isInchesDefaultOptionDisabled,
    isWeightDefaultOptionDisabled,
    isHeightDefaultOptionDisabled,
    onIsFeetDefaultOptionDisabled,
    onIsInchesDefaultOptionDisabled,
    onIsWeightDefaultOptionDisabled,
    onIsHeightDefaultOptionDisabled,
  } = useDisabledSelectOption(formData);

  const { weightInputPlaceholder } = useBMICalculations(formData);

  const inputsConfig = formInputsConfig({ formData, onChange: onHandleFormFieldsChange, weightInputPlaceholder });
  const formInputs = generateFormInputs<BMICalculatorFormInitialValues>({ config: inputsConfig });

  const selectsConfig = formSelectsConfig({
    formData,
    isFeetDefaultOptionDisabled,
    isInchesDefaultOptionDisabled,
    isWeightDefaultOptionDisabled,
    isHeightDefaultOptionDisabled,
    onChange: onHandleFormFieldsChange,
    onIsFeetDefaultOptionDisabled,
    onIsInchesDefaultOptionDisabled,
    onIsWeightDefaultOptionDisabled,
    onIsHeightDefaultOptionDisabled,
  });
  const formSelects = generateFormSelects<BMICalculatorFormInitialValues>({ config: selectsConfig });

  const heightInput = formInputs[0];
  const weightInput = formInputs[1];

  const feetSelect = formSelects[0];
  const inchesSelect = formSelects[1];
  const weightUnitsSelect = formSelects[2];
  const heightUnitsSelect = formSelects[3];

  const renderHeightInputOrSelects = (
    <>
      {formData.heightUnits !== HeightUnitsSelectOptions.Inches ? (
        heightInput
      ) : (
        <div style={{ display: 'flex', width: '100%' }}>
          {feetSelect}
          <InchesSelectWrapper>{inchesSelect}</InchesSelectWrapper>
        </div>
      )}
    </>
  );

  return (
    <>
      <FormDetailsWrapper>
        <InputWrapper>{weightInput}</InputWrapper>
        <SelectWrapper>{weightUnitsSelect}</SelectWrapper>
      </FormDetailsWrapper>
      <FormDetailsWrapper>
        <InputWrapper>{renderHeightInputOrSelects}</InputWrapper>
        <SelectWrapper>{heightUnitsSelect}</SelectWrapper>
      </FormDetailsWrapper>
    </>
  );
};

export default BMICalculatorFormDetails;
