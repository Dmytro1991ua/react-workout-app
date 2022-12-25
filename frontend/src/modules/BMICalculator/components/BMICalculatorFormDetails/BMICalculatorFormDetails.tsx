import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import Input from '../../../../components/Input/Input';
import { handleKeyDownOnInputField } from '../../../../utils';
import { FormFieldName, HEIGHT_OPTIONS, WEIGHT_OPTIONS } from '../../BMICalculator.constants';
import { HeightUnitsSelectOptions, WeightUnitsSelectOptions } from '../../BMICalculator.enums';
import { FieldNameType } from '../../BMICalculator.interfaces';
import { BMICalculatorFormInitialValues } from '../BMICalculatorForm/BMICalculator.interfaces';
import { Select } from './../../../../components/Select/Select';
import { FormDetailsWrapper, InputWrapper, SelectWrapper } from './BMICalculatorFormDetails.styled';

interface FormDetailsProps {
  isWeightDefaultOptionDisabled: boolean;
  isHeightDefaultOptionDisabled: boolean;
  selectedWeightUnitValue?: WeightUnitsSelectOptions;
  selectedHeightUnitValue?: HeightUnitsSelectOptions;
  weightValue?: string | number;
  renderHeightInputOrSelects: JSX.Element;
  weightInputPlaceholder: string;
  hasWeightValue: boolean;
  onHandleFormFieldsChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    fieldName: FieldNameType,
    isDefaultOptionDisabled?: Dispatch<SetStateAction<boolean>>
  ) => void;
  onIsWeightDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsHeightDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
}

const BMICalculatorFormDetails = ({
  isWeightDefaultOptionDisabled,
  isHeightDefaultOptionDisabled,
  selectedWeightUnitValue,
  selectedHeightUnitValue,
  renderHeightInputOrSelects,
  weightInputPlaceholder,
  weightValue,
  hasWeightValue,
  onHandleFormFieldsChange,
  onIsWeightDefaultOptionDisabled,
  onIsHeightDefaultOptionDisabled,
}: FormDetailsProps): ReactElement => {
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
            value={weightValue}
            onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.weight)}
            onKeyDown={handleKeyDownOnInputField}
            disabled={selectedWeightUnitValue === WeightUnitsSelectOptions.Default}
          />
        </InputWrapper>
        <SelectWrapper>
          <Select
            options={WEIGHT_OPTIONS}
            actionPanelSelect
            name={FormFieldName.weightUnits}
            id={FormFieldName.weightUnits}
            value={selectedWeightUnitValue}
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
            value={selectedHeightUnitValue}
            optionLabel='Select height:'
            onChange={(e) => onHandleFormFieldsChange(e, FormFieldName.heightUnits, onIsHeightDefaultOptionDisabled)}
            isDefaultOptionDisabled={isHeightDefaultOptionDisabled}
            disabled={!hasWeightValue}
          />
        </SelectWrapper>
      </FormDetailsWrapper>
    </>
  );
};

export default BMICalculatorFormDetails;
