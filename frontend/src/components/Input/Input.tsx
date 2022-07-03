import React, { ReactElement } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { colors } from '../../global-styles/ColorsPalette';
import { CustomInput, FieldErrorMessage } from './Input.styled';

interface InputProps {
  value?: string | number;
  id?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'file';
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
}

type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

const Input = <TFormValues extends Record<string, unknown>>({
  borderColor,
  ...inputProps
}: FormInputProps<TFormValues>): ReactElement => {
  const getBorderColorBasedOnProps = borderColor && colors[borderColor];
  const inputFieldError = inputProps.errors && inputProps.errors[inputProps.name];
  const changeBorderColorWhenErrorOccurred = inputFieldError ? colors.tomato : getBorderColorBasedOnProps;
  const getFormFieldByNameProp = {
    ...(inputProps.register && inputProps.register(inputProps.name ?? '', { required: inputProps.isRequired })),
  };
  const errorMessage = inputProps.errors && inputProps.errors[inputProps.name]?.message;

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
        hasError={inputFieldError}
        disabled={inputProps.disabled}
      />
      {inputProps.errors && <FieldErrorMessage>{errorMessage}</FieldErrorMessage>}
    </>
  );
};

export default Input;
