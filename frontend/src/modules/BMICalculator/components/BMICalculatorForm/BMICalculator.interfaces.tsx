import {
  FeetSelectOptions,
  HeightUnitsSelectOptions,
  InchesSelectOptions,
  WeightUnitsSelectOptions,
} from '../../BMICalculator.enums';

export type BMICalculatorFormInitialValues = {
  height?: number | string;
  heightUnits?: HeightUnitsSelectOptions;
  weight?: number | string;
  weightUnits?: WeightUnitsSelectOptions;
  feet?: FeetSelectOptions;
  inches?: InchesSelectOptions;
};
