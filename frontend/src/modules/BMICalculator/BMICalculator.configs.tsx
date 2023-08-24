import { handleKeyDownOnInputField } from '../../utils';
import { FEET_OPTIONS, FormFieldName, HEIGHT_OPTIONS, INCHES_OPTIONS, WEIGHT_OPTIONS } from './BMICalculator.constants';
import { ButtonLabel, HeightUnitsSelectOptions, WeightUnitsSelectOptions } from './BMICalculator.enums';
import {
  FormActionButtonConfig,
  FormActionButtonConfigProps,
  FormInputConfig,
  FormInputConfigProps,
  FormSelectConfig,
  FormSelectConfigProps,
} from './BMICalculator.interfaces';

export const formInputsConfig = ({
  formData,
  weightInputPlaceholder,
  onChange,
}: FormInputConfigProps): FormInputConfig[] => {
  return [
    {
      type: 'number',
      min: 0,
      max: 10000,
      name: FormFieldName.height,
      id: FormFieldName.height,
      placeholder: 'Enter your height',
      isRequired: true,
      borderColor: 'mantisDarker',
      fullWidth: true,
      value: formData.height,
      onChange,
      onKeyDown: handleKeyDownOnInputField,
      disabled: formData.heightUnits === HeightUnitsSelectOptions.Default,
    },
    {
      type: 'number',
      min: 0,
      max: 10000,
      name: FormFieldName.weight,
      id: FormFieldName.weight,
      placeholder: weightInputPlaceholder,
      isRequired: true,
      borderColor: 'mantisDarker',
      fullWidth: true,
      value: formData.weight,
      onChange,
      onKeyDown: handleKeyDownOnInputField,
      disabled: formData.weightUnits === WeightUnitsSelectOptions.Default,
    },
  ];
};

export const formSelectsConfig = ({
  formData,
  isFeetDefaultOptionDisabled,
  isInchesDefaultOptionDisabled,
  isWeightDefaultOptionDisabled,
  isHeightDefaultOptionDisabled,
  onChange,
  onIsFeetDefaultOptionDisabled,
  onIsInchesDefaultOptionDisabled,
  onIsWeightDefaultOptionDisabled,
  onIsHeightDefaultOptionDisabled,
}: FormSelectConfigProps): FormSelectConfig[] => {
  return [
    {
      options: FEET_OPTIONS,
      actionPanelSelect: true,
      name: FormFieldName.feet,
      id: FormFieldName.feet,
      value: formData.feet,
      optionLabel: 'Select feet:',
      onChange: (e) => {
        onChange(e);
        onIsFeetDefaultOptionDisabled(true);
      },
      isDefaultOptionDisabled: isFeetDefaultOptionDisabled,
      fullWidth: true,
    },
    {
      options: INCHES_OPTIONS,
      actionPanelSelect: true,
      name: FormFieldName.inches,
      id: FormFieldName.inches,
      value: formData.inches,
      optionLabel: 'Select inches:',
      onChange: (e) => {
        onChange(e);
        onIsInchesDefaultOptionDisabled(true);
      },
      isDefaultOptionDisabled: isInchesDefaultOptionDisabled,
      fullWidth: true,
    },
    {
      options: WEIGHT_OPTIONS,
      actionPanelSelect: true,
      name: FormFieldName.weightUnits,
      id: FormFieldName.weightUnits,
      value: formData.weightUnits,
      optionLabel: 'Select weight:',
      onChange: (e) => {
        onChange(e);
        onIsWeightDefaultOptionDisabled(true);
      },
      isDefaultOptionDisabled: isWeightDefaultOptionDisabled,
    },
    {
      options: HEIGHT_OPTIONS,
      actionPanelSelect: true,
      name: FormFieldName.heightUnits,
      id: FormFieldName.heightUnits,
      value: formData.heightUnits,
      optionLabel: 'Select height:',
      onChange: (e) => {
        onChange(e);
        onIsHeightDefaultOptionDisabled(true);
      },
      isDefaultOptionDisabled: isHeightDefaultOptionDisabled,
      disabled: !formData.weight,
    },
  ];
};

export const formActionsButtonsConfig = ({
  isButtonDisabled,
  onResetForm,
  onSubmit,
}: FormActionButtonConfigProps): FormActionButtonConfig[] => {
  return [
    {
      id: ButtonLabel.Reset,
      label: ButtonLabel.Reset,
      type: 'button',
      fullWidth: true,
      backgroundColor: 'white',
      hoverColor: 'lighterBlue',
      color: 'mantis',
      disabled: isButtonDisabled,
      onClick: onResetForm,
    },
    {
      id: ButtonLabel.Calculate,
      label: ButtonLabel.Calculate,
      type: 'submit',
      fullWidth: true,
      disabled: isButtonDisabled,
      backgroundColor: 'mantis',
      hoverColor: 'mantisDarker',
      color: 'white',
      onClick: onSubmit,
    },
  ];
};
