import {
  FeetSelectOptions,
  HeightUnitsSelectOptions,
  InchesSelectOptions,
  WeightUnitsSelectOptions,
} from '../../BMICalculator.enums';
import { BMICalculatorFormInitialValues } from '../../BMICalculator.interfaces';

export const BMI_CALCULATOR_FORM_INITIAL_VALUES: BMICalculatorFormInitialValues = {
  height: '',
  heightUnits: HeightUnitsSelectOptions.Default,
  weight: '',
  weightUnits: WeightUnitsSelectOptions.Default,
  feet: FeetSelectOptions.Default,
  inches: InchesSelectOptions.Default,
};
