import { Dispatch, SetStateAction } from 'react';
import { Path, UseFormReset } from 'react-hook-form';

import {
  ButtonLabel,
  FeetSelectOptions,
  HeightUnitsSelectOptions,
  InchesSelectOptions,
  WeightUnitsSelectOptions,
} from './BMICalculator.enums';

export type FieldNameType = 'height' | 'heightUnits' | 'weight' | 'weightUnits' | 'feet' | 'inches';

export type BMICalculatorFormInitialValues = {
  height?: number | string;
  heightUnits?: HeightUnitsSelectOptions;
  weight?: number | string;
  weightUnits?: WeightUnitsSelectOptions;
  feet?: FeetSelectOptions;
  inches?: InchesSelectOptions;
};

export interface CalculateBmiBasedOnUserPreferencesProps {
  formData: BMICalculatorFormInitialValues;
  onSetBmiInPoundsAndInches: (value: string) => void;
  onSetBmiInKilogramsAndCentimeters: (value: string) => void;
}

export interface BmiImageResult {
  imagePath: string;
  imageAlt: string;
}

export type SelectValueType = string | number;

export type FormInputConfig = {
  type: 'text' | 'number' | 'password' | 'email' | 'file';
  min: number;
  max: number;
  name: Path<BMICalculatorFormInitialValues>;
  id: string;
  placeholder: string;
  isRequired?: boolean;
  borderColor: keyof MainPalette;
  fullWidth?: boolean;
  value?: SelectValueType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>) => void;
  disabled?: boolean;
};

export type FormSelectConfig = {
  options: SelectedOption[];
  actionPanelSelect?: boolean;
  name: Path<BMICalculatorFormInitialValues>;
  id: string;
  value?: SelectValueType;
  optionLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  isDefaultOptionDisabled?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export type FormInputConfigProps = {
  formData: BMICalculatorFormInitialValues;
  weightInputPlaceholder: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
};

export type FormSelectConfigProps = {
  formData: BMICalculatorFormInitialValues;
  isFeetDefaultOptionDisabled: boolean;
  isInchesDefaultOptionDisabled: boolean;
  isWeightDefaultOptionDisabled: boolean;
  isHeightDefaultOptionDisabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onIsFeetDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsInchesDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsWeightDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsHeightDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
};

export type FormActionButtonConfig = {
  type: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  backgroundColor: keyof MainPalette;
  hoverColor: keyof MainPalette;
  color: keyof MainPalette;
  label: ButtonLabel;
  id: ButtonLabel;
  disabled?: boolean;
  onClick: () => void | Promise<void>;
};

export type FormActionButtonConfigProps = {
  onResetForm: UseFormReset<BMICalculatorFormInitialValues>;
  onSubmit: () => void;
  isButtonDisabled: boolean;
};
