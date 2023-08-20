import { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { HeightUnitsSelectOptions } from '../../../BMICalculator.enums';
import { BMICalculatorFormInitialValues } from '../BMICalculator.interfaces';

type ReturnedHookType = {
  isWeightDefaultOptionDisabled: boolean;
  isHeightDefaultOptionDisabled: boolean;
  isFeetDefaultOptionDisabled: boolean;
  isInchesDefaultOptionDisabled: boolean;
  isButtonDisabled: boolean;
  onEnableDefaultSelectOptionOnFormReset: () => void;
  onIsHeightDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsWeightDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsFeetDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
  onIsInchesDefaultOptionDisabled: Dispatch<SetStateAction<boolean>>;
};

export const useDisabledSelectOption = (formData: BMICalculatorFormInitialValues): ReturnedHookType => {
  const [isWeightDefaultOptionDisabled, setIsWeightDefaultOptionDisabled] = useState<boolean>(false);
  const [isHeightDefaultOptionDisabled, setIsHeightDefaultOptionDisabled] = useState<boolean>(false);
  const [isFeetDefaultOptionDisabled, setIsFeetDefaultOptionDisabled] = useState<boolean>(false);
  const [isInchesDefaultOptionDisabled, setIsInchesDefaultOptionDisabled] = useState<boolean>(false);

  const isButtonDisabled =
    (!formData.height && formData.heightUnits !== HeightUnitsSelectOptions.Inches) ||
    (!formData.feet && !formData.inches && formData.heightUnits === HeightUnitsSelectOptions.Inches);

  const onEnableDefaultSelectOptionOnFormReset = useCallback((): void => {
    setIsWeightDefaultOptionDisabled(false);
    setIsHeightDefaultOptionDisabled(false);
    setIsFeetDefaultOptionDisabled(false);
    setIsInchesDefaultOptionDisabled(false);
  }, []);

  return {
    isWeightDefaultOptionDisabled,
    isHeightDefaultOptionDisabled,
    isFeetDefaultOptionDisabled,
    isInchesDefaultOptionDisabled,
    isButtonDisabled,
    onEnableDefaultSelectOptionOnFormReset,
    onIsHeightDefaultOptionDisabled: setIsHeightDefaultOptionDisabled,
    onIsWeightDefaultOptionDisabled: setIsWeightDefaultOptionDisabled,
    onIsFeetDefaultOptionDisabled: setIsFeetDefaultOptionDisabled,
    onIsInchesDefaultOptionDisabled: setIsInchesDefaultOptionDisabled,
  };
};
