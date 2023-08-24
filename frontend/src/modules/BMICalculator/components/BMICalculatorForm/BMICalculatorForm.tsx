import React, { ReactElement, useState } from 'react';

import { FormFieldName } from '../../BMICalculator.constants';
import {
  BmiMessageResult,
  FeetSelectOptions,
  HeightUnitsSelectOptions,
  InchesSelectOptions,
} from '../../BMICalculator.enums';
import { BMICalculatorFormInitialValues, BmiImageResult, FieldNameType } from '../../BMICalculator.interfaces';
import { calculateBmiBasedOnUserPreferences } from '../../BMICalculator.utils';
import BMICalculatorFormDetails from '../BMICalculatorFormDetails/BMICalculatorFormDetails';
import BMICalculatorFormActions from './../BMICalculatorFormActions/BMICalculatorFormActions';
import BMICalculatorResult from './../BMICalculatorResult/BMICalculatorResult';
import { BMI_CALCULATOR_FORM_INITIAL_VALUES } from './BMICalculator.schema';
import { useBMICalculations } from './hooks/useBMICalculations';
import { useDisabledSelectOption } from './hooks/useDisabledSelectOption';

const BMICalculatorForm = (): ReactElement => {
  const [formData, setFormData] = useState<BMICalculatorFormInitialValues>(BMI_CALCULATOR_FORM_INITIAL_VALUES);

  const {
    bmiInKilogramsAndCentimeters,
    bmiInPoundsAndInches,
    calculatedBmiResult,
    bmiResultImageBasedOnMetricUnit,
    bmiResultMessageBasedOnMetricUnit,
    onResetBmiResult,
    onSetBmiInKilogramsAndCentimeters,
    onSetBmiInPoundsAndInches,
  } = useBMICalculations(formData);

  const { isButtonDisabled, onEnableDefaultSelectOptionOnFormReset } = useDisabledSelectOption(formData);

  function clearHeightValueOnInchesSelect(): void {
    if (formData.heightUnits === HeightUnitsSelectOptions.Inches) {
      setFormData((prev) => {
        return { ...prev, [FormFieldName.height]: '' };
      });
    }
  }

  function clearInchesAndFeetValueOnCentimeterSelect(): void {
    if (formData.heightUnits !== HeightUnitsSelectOptions.Inches) {
      setFormData((prev) => {
        return { ...prev, [FormFieldName.inches]: InchesSelectOptions.Default };
      });
      setFormData((prev) => {
        return { ...prev, [FormFieldName.feet]: FeetSelectOptions.Default };
      });
    }
  }
  const handleFormFieldsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const fieldName = e.target.name as FieldNameType;

    setFormData((prev) => {
      return { ...prev, [fieldName]: e.target.value };
    });

    if (fieldName === FormFieldName.heightUnits) {
      clearHeightValueOnInchesSelect();
      clearInchesAndFeetValueOnCentimeterSelect();
    }
  };

  function clearFormFields(): void {
    setFormData(BMI_CALCULATOR_FORM_INITIAL_VALUES);
  }

  function resetFormStates(): void {
    onEnableDefaultSelectOptionOnFormReset();
    clearFormFields();
  }

  function handleFormSubmit(): void {
    calculateBmiBasedOnUserPreferences({
      formData,
      onSetBmiInPoundsAndInches,
      onSetBmiInKilogramsAndCentimeters,
    });

    resetFormStates();
  }

  function handleResetForm(): void {
    resetFormStates();
  }

  const renderFormDetails = (
    <>
      {!bmiInKilogramsAndCentimeters && !bmiInPoundsAndInches && (
        <>
          <BMICalculatorFormDetails formData={formData} onHandleFormFieldsChange={handleFormFieldsChange} />
          <BMICalculatorFormActions
            onResetForm={handleResetForm}
            isButtonDisabled={isButtonDisabled}
            onSubmit={handleFormSubmit}
          />
        </>
      )}
    </>
  );

  const renderBmiResult = (
    <>
      {(bmiInKilogramsAndCentimeters || bmiInPoundsAndInches) && (
        <BMICalculatorResult
          bmiResult={calculatedBmiResult}
          bmiResultMessage={bmiResultMessageBasedOnMetricUnit as BmiMessageResult}
          bmiResultImage={bmiResultImageBasedOnMetricUnit as BmiImageResult}
          onResetBmiResult={onResetBmiResult}
        />
      )}
    </>
  );

  return (
    <form>
      {renderFormDetails}
      {renderBmiResult}
    </form>
  );
};

export default BMICalculatorForm;
