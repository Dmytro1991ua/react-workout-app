import { useCallback, useMemo, useState } from 'react';

import { BmiMessageResult, WeightUnitsSelectOptions } from '../../../BMICalculator.enums';
import { BMICalculatorFormInitialValues, BmiImageResult } from '../../../BMICalculator.interfaces';
import { getBmiImageResult, getBmiMessageResult } from '../../../BMICalculator.utils';

type ReturnedHookType = {
  calculatedBmiResult: string;
  bmiInKilogramsAndCentimeters: string;
  bmiInPoundsAndInches: string;
  bmiResultMessageBasedOnMetricUnit?: BmiMessageResult;
  bmiResultImageBasedOnMetricUnit?: BmiImageResult;
  weightInputPlaceholder: string;
  onSetBmiInKilogramsAndCentimeters: (value: string) => void;
  onSetBmiInPoundsAndInches: (value: string) => void;
  onResetBmiResult: () => void;
};

export const useBMICalculations = (formData: BMICalculatorFormInitialValues): ReturnedHookType => {
  const [bmiInKilogramsAndCentimeters, setBmiInKilogramsAndCentimeters] = useState<string>('');
  const [bmiInPoundsAndInches, setBmiInPoundsAndInches] = useState<string>('');

  const weightInputPlaceholder =
    formData.weightUnits === WeightUnitsSelectOptions.Kilogram
      ? 'Enter your weight in kilograms'
      : formData.weightUnits === WeightUnitsSelectOptions.Pound
      ? 'Enter your weight in pounds'
      : 'Enter your weight';

  const calculatedBmiResult = bmiInKilogramsAndCentimeters ? bmiInKilogramsAndCentimeters : bmiInPoundsAndInches;

  const bmiResultMessageInKilogramsAndAndCentimeters = useMemo(
    () => getBmiMessageResult(Number(bmiInKilogramsAndCentimeters)),
    [bmiInKilogramsAndCentimeters]
  );
  const bmiResultMessageInPoundsAndInches = useMemo(
    () => getBmiMessageResult(Number(bmiInPoundsAndInches)),
    [bmiInPoundsAndInches]
  );
  const bmiResultImageForKilogramsAndAndCentimeters = useMemo(
    () => getBmiImageResult(Number(bmiInKilogramsAndCentimeters)),
    [bmiInKilogramsAndCentimeters]
  );
  const bmiResultImageForPoundsAndInches = useMemo(
    () => getBmiImageResult(Number(bmiInPoundsAndInches)),
    [bmiInPoundsAndInches]
  );

  const bmiResultMessageBasedOnMetricUnit = bmiInKilogramsAndCentimeters
    ? bmiResultMessageInKilogramsAndAndCentimeters
    : bmiResultMessageInPoundsAndInches;

  const bmiResultImageBasedOnMetricUnit = bmiInKilogramsAndCentimeters
    ? bmiResultImageForKilogramsAndAndCentimeters
    : bmiResultImageForPoundsAndInches;

  const onResetBmiResult = useCallback((): void => {
    setBmiInKilogramsAndCentimeters('');
    setBmiInPoundsAndInches('');
  }, []);

  return {
    weightInputPlaceholder,
    calculatedBmiResult,
    bmiInKilogramsAndCentimeters,
    bmiInPoundsAndInches,
    bmiResultMessageBasedOnMetricUnit,
    bmiResultImageBasedOnMetricUnit,
    onSetBmiInKilogramsAndCentimeters: setBmiInKilogramsAndCentimeters,
    onSetBmiInPoundsAndInches: setBmiInPoundsAndInches,
    onResetBmiResult,
  };
};
