import { Dispatch, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';

import {
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

export type FormActionButtonConfigProps = {
  onResetForm: UseFormReset<BMICalculatorFormInitialValues>;
  onSubmit: () => void;
  isButtonDisabled: boolean;
};
