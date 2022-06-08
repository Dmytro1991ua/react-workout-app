import React, { ReactElement } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { CustomFieldError, WorkoutFormInput } from './FormInput.styled';

type InputProps = {
  value?: string | number;
  id?: string;
  type?: 'text' | 'number';
  name?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>) => void;
};

type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, 'name'>;

const FormInput = <TFormValues extends Record<string, unknown>>(props: FormInputProps<TFormValues>): ReactElement => {
  const getFormFieldByNameProp = {
    ...(props.register && props.register(props.name, props.rules)),
  };

  const errorMessage = props.errors && props.errors[props.name]?.message;

  return (
    <>
      <WorkoutFormInput
        value={props.value}
        {...getFormFieldByNameProp}
        id={props.id}
        type={props.type}
        min={props.min}
        max={props.max}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      {<CustomFieldError>{errorMessage}</CustomFieldError>}
    </>
  );
};

export default FormInput;
