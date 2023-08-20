import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import Input from '../../../../components/Input/Input';
import { handleKeyDownOnInputField } from '../../../../utils';
import {
  FEET_OPTIONS,
  FormFieldName,
  HEIGHT_OPTIONS,
  INCHES_OPTIONS,
  WEIGHT_OPTIONS,
} from '../../BMICalculator.constants';
import { HeightUnitsSelectOptions, WeightUnitsSelectOptions } from '../../BMICalculator.enums';
import { FieldNameType } from '../../BMICalculator.interfaces';
import { BMICalculatorFormInitialValues } from '../BMICalculatorForm/BMICalculator.interfaces';
import { InchesSelectWrapper } from '../BMICalculatorForm/BMICalculatorForm.styled';
import { useBMICalculations } from '../BMICalculatorForm/hooks/useBMICalculations';
import { useDisabledSelectOption } from '../BMICalculatorForm/hooks/useDisabledSelectOption';
import { Select } from './../../../../components/Select/Select';
import { FormDetailsWrapper, InputWrapper, SelectWrapper } from './BMICalculatorFormDetails.styled';

interface FormDetailsProps {
  formData: BMICalculatorFormInitialValues;
  onHandleFormFieldsChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    fieldName: FieldNameType,
    isDefaultOptionDisabled?: Dispatch<SetStateAction<boolean>>
  ) => void;
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
          onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.height)}
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
            onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.feet, onIsFeetDefaultOptionDisabled)}
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
              onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.inches, onIsInchesDefaultOptionDisabled)}
              isDefaultOptionDisabled={isInchesDefaultOptionDisabled}
              fullWidth
            />
          </InchesSelectWrapper>
        </div>
      )}
    </>
  );

  return (
    <>
      <FormDetailsWrapper>
        <InputWrapper>
          <Input<BMICalculatorFormInitialValues>
            type='number'
            min={0}
            max={10000}
            name={FormFieldName.weight}
            id={FormFieldName.weight}
            placeholder={weightInputPlaceholder}
            isRequired
            borderColor='mantisDarker'
            fullWidth
            value={formData.weight}
            onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.weight)}
            onKeyDown={handleKeyDownOnInputField}
            disabled={formData.weightUnits === WeightUnitsSelectOptions.Default}
          />
        </InputWrapper>
        <SelectWrapper>
          <Select
            options={WEIGHT_OPTIONS}
            actionPanelSelect
            name={FormFieldName.weightUnits}
            id={FormFieldName.weightUnits}
            value={formData.weightUnits}
            optionLabel='Select weight:'
            onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.weightUnits, onIsWeightDefaultOptionDisabled)}
            isDefaultOptionDisabled={isWeightDefaultOptionDisabled}
          />
        </SelectWrapper>
      </FormDetailsWrapper>
      <FormDetailsWrapper>
        <InputWrapper>{renderHeightInputOrSelects}</InputWrapper>
        <SelectWrapper>
          <Select
            options={HEIGHT_OPTIONS}
            actionPanelSelect
            name={FormFieldName.heightUnits}
            id={FormFieldName.heightUnits}
            value={formData.heightUnits}
            optionLabel='Select height:'
            onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.heightUnits, onIsHeightDefaultOptionDisabled)}
            isDefaultOptionDisabled={isHeightDefaultOptionDisabled}
            disabled={!formData.weight}
          />
        </SelectWrapper>
      </FormDetailsWrapper>
    </>
  );
};

export default BMICalculatorFormDetails;
