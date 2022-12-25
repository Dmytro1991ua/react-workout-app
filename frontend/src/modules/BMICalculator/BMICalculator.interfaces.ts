import { BMICalculatorFormInitialValues } from './components/BMICalculatorForm/BMICalculator.interfaces';

export type FieldNameType = 'height' | 'heightUnits' | 'weight' | 'weightUnits' | 'feet' | 'inches';

export interface CalculateBmiBasedOnUserPreferencesProps {
  formData: BMICalculatorFormInitialValues;
  onSetBmiInPoundsAndInches: (value: string) => void;
  onSetBmiInKilogramsAndCentimeters: (value: string) => void;
}

export interface BmiImageResult {
  imagePath: string;
  imageAlt: string;
}
