import HealthyBodyImage from '../../assets/images/bmi/normal.png';
import ObeseClass1BodyImage from '../../assets/images/bmi/obese-class-1.png';
import ObeseClass2BodyImage from '../../assets/images/bmi/obese-class-2.png';
import ObeseClass3BodyImage from '../../assets/images/bmi/obese-class-3.png';
import OverweightBodyImage from '../../assets/images/bmi/overweight.png';
import UnderweightBodyImage from '../../assets/images/bmi/underweight.png';
import {
  BmiImageAltText,
  BmiMessageResult,
  BmiResult,
  HeightUnitsSelectOptions,
  WeightUnitsSelectOptions,
} from './BMICalculator.enums';
import { BmiImageResult, CalculateBmiBasedOnUserPreferencesProps } from './BMICalculator.interfaces';

export function getBmiMessageResult(bmi: number): BmiMessageResult | undefined {
  if (bmi < BmiResult.Healthy) {
    return BmiMessageResult.UnderweightBodyMessage;
  } else if (bmi >= BmiResult.Healthy && bmi < BmiResult.Overweight) {
    return BmiMessageResult.HealthyBodyMessage;
  } else if (bmi >= BmiResult.Overweight && bmi < BmiResult.ObeseClass1) {
    return BmiMessageResult.OverweightBodyMessage;
  } else if (bmi >= BmiResult.ObeseClass1 && bmi < BmiResult.ObeseClass2) {
    return BmiMessageResult.ObeseClass1BodyMessage;
  } else if (bmi >= BmiResult.ObeseClass2 && bmi < BmiResult.ObeseClass3) {
    return BmiMessageResult.ObeseClass2BodyMessage;
  } else if (bmi >= BmiResult.ObeseClass3) {
    return BmiMessageResult.ObeseClass3BodyMessage;
  }
}

export function getBmiImageResult(bmi: number): BmiImageResult | undefined {
  if (bmi < BmiResult.Healthy) {
    return { imagePath: UnderweightBodyImage, imageAlt: BmiImageAltText.Underweight };
  } else if (bmi >= BmiResult.Healthy && bmi < BmiResult.Overweight) {
    return { imagePath: HealthyBodyImage, imageAlt: BmiImageAltText.Healthy };
  } else if (bmi >= BmiResult.Overweight && bmi < BmiResult.ObeseClass1) {
    return { imagePath: OverweightBodyImage, imageAlt: BmiImageAltText.Overweight };
  } else if (bmi >= BmiResult.ObeseClass1 && bmi < BmiResult.ObeseClass2) {
    return { imagePath: ObeseClass1BodyImage, imageAlt: BmiImageAltText.ObeseClass1 };
  } else if (bmi >= BmiResult.ObeseClass2 && bmi < BmiResult.ObeseClass3) {
    return { imagePath: ObeseClass2BodyImage, imageAlt: BmiImageAltText.ObeseClass2 };
  } else if (bmi >= BmiResult.ObeseClass3) {
    return { imagePath: ObeseClass3BodyImage, imageAlt: BmiImageAltText.ObeseClass3 };
  }
}

export function calculateBmiInKilogramsAndCentimeters({
  formData,
  onSetBmiInPoundsAndInches,
  onSetBmiInKilogramsAndCentimeters,
}: CalculateBmiBasedOnUserPreferencesProps): void {
  const { weight, height } = formData;

  const bmi = Number(weight) / Math.pow(Number(height) / 100, 2);

  onSetBmiInKilogramsAndCentimeters(bmi.toFixed(1));
  onSetBmiInPoundsAndInches('');
}

export function calculateBmiInPoundsAndInches({
  formData,
  onSetBmiInPoundsAndInches,
  onSetBmiInKilogramsAndCentimeters,
}: CalculateBmiBasedOnUserPreferencesProps): void {
  const { weight, feet, inches } = formData;

  const totalInches = Number(feet) * 12 + Number(inches);
  const bmi = (Number(weight) / Math.pow(totalInches, 2)) * 703;

  onSetBmiInPoundsAndInches(bmi.toFixed(1));
  onSetBmiInKilogramsAndCentimeters('');
}

export function calculateBmiBasedOnUserPreferences({
  formData,
  onSetBmiInPoundsAndInches,
  onSetBmiInKilogramsAndCentimeters,
}: CalculateBmiBasedOnUserPreferencesProps): void {
  const shouldBmiBeCalculatedInKilogramsAndCentimeters =
    formData.weightUnits === WeightUnitsSelectOptions.Kilogram &&
    formData.heightUnits === HeightUnitsSelectOptions.Centimeter;

  if (shouldBmiBeCalculatedInKilogramsAndCentimeters) {
    calculateBmiInKilogramsAndCentimeters({ formData, onSetBmiInPoundsAndInches, onSetBmiInKilogramsAndCentimeters });
  } else {
    calculateBmiInPoundsAndInches({ formData, onSetBmiInPoundsAndInches, onSetBmiInKilogramsAndCentimeters });
  }
}
