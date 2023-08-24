import React, { ReactElement, useMemo } from 'react';

import { HeightUnitsSelectOptions } from '../../BMICalculator.enums';
import { BMICalculatorFormInitialValues } from '../../BMICalculator.interfaces';
import { generateFormInputs, generateFormSelects } from '../../BMICalculator.utils';
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

  const formInputs = useMemo(
    () => generateFormInputs({ formData, weightInputPlaceholder, onChange: onHandleFormFieldsChange }),
    [formData, weightInputPlaceholder, onHandleFormFieldsChange]
  );
  const formSelects = useMemo(
    () =>
      generateFormSelects({
        formData,
        isFeetDefaultOptionDisabled,
        isHeightDefaultOptionDisabled,
        isInchesDefaultOptionDisabled,
        isWeightDefaultOptionDisabled,
        onChange: onHandleFormFieldsChange,
        onIsFeetDefaultOptionDisabled,
        onIsHeightDefaultOptionDisabled,
        onIsInchesDefaultOptionDisabled,
        onIsWeightDefaultOptionDisabled,
      }),
    [
      formData,
      isFeetDefaultOptionDisabled,
      isHeightDefaultOptionDisabled,
      isInchesDefaultOptionDisabled,
      isWeightDefaultOptionDisabled,
      onHandleFormFieldsChange,
      onIsFeetDefaultOptionDisabled,
      onIsHeightDefaultOptionDisabled,
      onIsInchesDefaultOptionDisabled,
      onIsWeightDefaultOptionDisabled,
    ]
  );

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
