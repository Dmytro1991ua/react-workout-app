import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';

import { CustomFieldError, WorkoutFormInput } from './FormInput.styled';

interface FormInputProps {
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
  register?: ReturnType<typeof useForm>['register'];
  error?: FieldErrors<FieldValues>;
}

const FormInput = (props: FormInputProps): ReactElement => {
  const getFormFieldByNameProp = {
    ...(props.register && props.register(props.name ?? '', { required: props.isRequired })),
  };

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
      {props.error && <CustomFieldError>{props.error.message}</CustomFieldError>}
    </>
  );
};

export default FormInput;
