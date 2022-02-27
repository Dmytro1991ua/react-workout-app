import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { colors } from '../../global-styles/ColorsPalette';

import { CustomInput, FieldError } from './Input.styled';

interface InputProps {
  value?: string | number;
  id?: string;
  type?: 'text' | 'number' | 'password' | 'email';
  name?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (element: HTMLInputElement) => void;
  disabled?: boolean;
  isRequired?: boolean;
  borderColor?: keyof MainPalette;
  fullWidth?: boolean;
  register?: ReturnType<typeof useForm>['register'];
  error?: FieldErrors<FieldValues>;
}

const Input = ({ borderColor, ...inputProps }: InputProps): ReactElement => {
  const getBorderColorBasedOnProps = borderColor && colors[borderColor];
  const changeBorderColorWhenErrorOccurred = inputProps.error ? colors.tomato : getBorderColorBasedOnProps;

  const getFormFieldByNameProp = {
    ...(inputProps.register && inputProps.register(inputProps.name ?? '', { required: inputProps.isRequired })),
  };

  return (
    <>
      <CustomInput
        id={inputProps.id}
        type={inputProps.type}
        name={inputProps.name}
        {...getFormFieldByNameProp}
        min={inputProps.min}
        max={inputProps.max}
        placeholder={inputProps.placeholder}
        value={inputProps.value}
        borderColor={changeBorderColorWhenErrorOccurred}
        fullWidth={inputProps.fullWidth}
        hasError={!!inputProps.error}
      />
      {inputProps.error && <FieldError>{inputProps.error.message}</FieldError>}
    </>
  );
};

export default Input;
