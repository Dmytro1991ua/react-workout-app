import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react';

import { Select } from '../../../../components/Select/Select';
import { handleKeyDownOnInputField } from '../../../../utils';
import { FEET_OPTIONS, FieldNameType, FormFieldName, INCHES_OPTIONS } from '../../BMICalculator.constants';
import {
  FeetSelectOptions,
  HeightUnitsSelectOptions,
  InchesSelectOptions,
  WeightUnitsSelectOptions,
} from '../../BMICalculator.enums';
import BMICalculatorFormDetails from '../BMICalculatorFormDetails/BMICalculatorFormDetails';
import Input from './../../../../components/Input/Input';
import BMICalculatorFormActions from './../BMICalculatorFormActions/BMICalculatorFormActions';
import { BMICalculatorFormInitialValues } from './BMICalculator.interfaces';
import { BMI_CALCULATOR_FORM_INITIAL_VALUES } from './BMICalculator.schema';
import { InchesSelectWrapper } from './BMICalculatorForm.styled';

const BMICalculatorForm = (): ReactElement => {
  const [formData, setFormData] = useState<BMICalculatorFormInitialValues>(BMI_CALCULATOR_FORM_INITIAL_VALUES);

  const [isWeightDefaultOptionDisabled, setIsWeightDefaultOptionDisabled] = useState<boolean>(false);
  const [isHeightDefaultOptionDisabled, setIsHeightDefaultOptionDisabled] = useState<boolean>(false);
  const [isFeetDefaultOptionDisabled, setIsFeetDefaultOptionDisabled] = useState<boolean>(false);
  const [isInchesDefaultOptionDisabled, setIsInchesDefaultOptionDisabled] = useState<boolean>(false);

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
  const handleFormFieldsChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    fieldName: FieldNameType,
    isDefaultOptionDisabled?: Dispatch<SetStateAction<boolean>>
  ): void => {
    setFormData((prev) => {
      return { ...prev, [fieldName]: e.target.value };
    });

    if (fieldName === FormFieldName.heightUnits) {
      clearHeightValueOnInchesSelect();
      clearInchesAndFeetValueOnCentimeterSelect();
    }

    isDefaultOptionDisabled && isDefaultOptionDisabled(true);
  };

  const isButtonDisabled =
    (!formData.height && formData.heightUnits !== HeightUnitsSelectOptions.Inches) ||
    (!formData.feet && !formData.inches && formData.heightUnits === HeightUnitsSelectOptions.Inches);

  const weightInputPlaceholder =
    formData.weightUnits === WeightUnitsSelectOptions.Kilogram
      ? 'Enter your weight in kilograms'
      : formData.weightUnits === WeightUnitsSelectOptions.Pound
      ? 'Enter your weight in pounds'
      : 'Enter your weight';

  function clearFormFields(): void {
    setFormData(BMI_CALCULATOR_FORM_INITIAL_VALUES);
  }

  function enableDefaultSelectOptionOnFormReset(): void {
    setIsWeightDefaultOptionDisabled(false);
    setIsHeightDefaultOptionDisabled(false);
    setIsFeetDefaultOptionDisabled(false);
    setIsInchesDefaultOptionDisabled(false);
  }

  function resetFormStates(): void {
    enableDefaultSelectOptionOnFormReset();
    clearFormFields();
  }

  function handleFormSubmit(): void {
    // TODO: Remove later on
    console.log(formData);

    resetFormStates();
  }

  function handleResetForm(): void {
    resetFormStates();
  }

  const renderHeightInputOrSelects = (
    <>
      {formData.heightUnits !== HeightUnitsSelectOptions.Inches ? (
        <Input<BMICalculatorFormInitialValues>
          type='number'
          min={0}
          max={10000}
          name={FormFieldName.height}
          id={FormFieldName.height}
          placeholder='Enter your height'
          isRequired
          borderColor='mantisDarker'
          fullWidth
          value={formData.height}
          onChange={(e) => handleFormFieldsChange(e, FormFieldName.height)}
          onKeyDown={handleKeyDownOnInputField}
          disabled={formData.heightUnits === HeightUnitsSelectOptions.Default}
        />
      ) : (
        <div style={{ display: 'flex', width: '100%' }}>
          <Select
            options={FEET_OPTIONS}
            actionPanelSelect
            name={FormFieldName.feet}
            id={FormFieldName.feet}
            value={formData.feet}
            optionLabel='Select feet:'
            onChange={(e) => handleFormFieldsChange(e, FormFieldName.feet, setIsFeetDefaultOptionDisabled)}
            isDefaultOptionDisabled={isFeetDefaultOptionDisabled}
            fullWidth
          />
          <InchesSelectWrapper>
            <Select
              options={INCHES_OPTIONS}
              actionPanelSelect
              name={FormFieldName.inches}
              id={FormFieldName.inches}
              value={formData.inches}
              optionLabel='Select inches:'
              onChange={(e) => handleFormFieldsChange(e, FormFieldName.inches, setIsInchesDefaultOptionDisabled)}
              isDefaultOptionDisabled={isInchesDefaultOptionDisabled}
              fullWidth
            />
          </InchesSelectWrapper>
        </div>
      )}
    </>
  );

  return (
    <form>
      <BMICalculatorFormDetails
        selectedWeightUnitValue={formData.weightUnits}
        selectedHeightUnitValue={formData.heightUnits}
        weightValue={formData.weight}
        isWeightDefaultOptionDisabled={isWeightDefaultOptionDisabled}
        isHeightDefaultOptionDisabled={isHeightDefaultOptionDisabled}
        renderHeightInputOrSelects={renderHeightInputOrSelects}
        weightInputPlaceholder={weightInputPlaceholder}
        hasWeightValue={Boolean(formData.weight)}
        onHandleFormFieldsChange={handleFormFieldsChange}
        onIsHeightDefaultOptionDisabled={setIsHeightDefaultOptionDisabled}
        onIsWeightDefaultOptionDisabled={setIsWeightDefaultOptionDisabled}
      />
      <BMICalculatorFormActions
        onResetForm={handleResetForm}
        isDisabled={isButtonDisabled}
        onSubmit={handleFormSubmit}
      />
    </form>
  );
};

export default BMICalculatorForm;
