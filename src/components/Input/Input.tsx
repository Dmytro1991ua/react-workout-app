import React, { ReactElement } from 'react';
import { colors } from '../../global-styles/GlobalStyles.styled';
import { CustomInput } from './Input.styled';

interface InputProps {
  value: string | number;
  id?: string;
  type?: 'text' | 'number' | 'password' | 'email';
  name?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (element: HTMLInputElement) => void;
  disabled?: boolean;
  isRequired?: boolean;
  borderColor?: keyof MainPalette;
  fullWidth?: boolean;
}

const Input = ({ borderColor, ...inputProps }: InputProps): ReactElement => {
  const getBorderColorBasedOnProps = borderColor && colors[borderColor];

  return (
    <CustomInput
      id={inputProps.id}
      type={inputProps.type}
      name={inputProps.name}
      min={inputProps.min}
      max={inputProps.max}
      placeholder={inputProps.placeholder}
      value={inputProps.value}
      required={inputProps.isRequired}
      borderColor={getBorderColorBasedOnProps}
      fullWidth={inputProps.fullWidth}
      onChange={(e) => {
        e.preventDefault();
        inputProps.onChange(e);
      }}
      onBlur={(e) => {
        e.preventDefault();
        inputProps.onBlur && inputProps.onBlur(e);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && inputProps.onSubmit) {
          inputProps.onSubmit(e.currentTarget);
        }
      }}
    />
  );
};

export default Input;
