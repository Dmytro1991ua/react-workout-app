import { FieldValues, Path } from 'react-hook-form';

import { FormHeaderLabel } from './modules/Auth/Auth.enums';
import { ButtonLabel } from './modules/BMICalculator/BMICalculator.enums';

export type SelectValueType = string | number;

export type FormInputConfig<T extends FieldValues> = {
  type?: 'text' | 'number' | 'password' | 'email' | 'file';
  min?: number;
  max?: number;
  id: string;
  name: Path<T>;
  placeholder: string;
  isRequired?: boolean;
  borderColor?: keyof MainPalette;
  fullWidth?: boolean;
  value?: SelectValueType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>) => void;
  disabled?: boolean;
};

export type FormSelectConfig<T extends FieldValues> = {
  options: SelectedOption[];
  actionPanelSelect?: boolean;
  name: Path<T>;
  id: string;
  value?: SelectValueType;
  optionLabel?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  isDefaultOptionDisabled?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

export type FormActionButtonConfig = {
  id?: FormHeaderLabel | ButtonLabel;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  backgroundColor?: keyof MainPalette;
  hoverColor?: keyof MainPalette;
  color?: keyof MainPalette;
  label?: FormHeaderLabel | ButtonLabel;
  disabled?: boolean;
  onClick?: () => void | Promise<void>;
};
