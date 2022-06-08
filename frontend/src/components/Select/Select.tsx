import React, { ReactElement } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import { SortedWorkoutsSelectOption } from '../../modules/Workouts/Workouts.enums';

import { FieldErrorMessage } from '../Input/Input.styled';
import { FormSelect } from './Select.styled';

type SelectProps = {
  options: SelectedOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  isRequired?: boolean;
  actionPanelSelect?: boolean;
  optionLabel?: string;
  value?: SortedWorkoutsSelectOption;
  isDefaultOptionDisabled?: boolean;
  disabled?: boolean;
};

type FormSelectProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<SelectProps, 'name'>;

export const Select = <TFormValues extends Record<string, unknown>>(
  props: FormSelectProps<TFormValues>
): ReactElement => {
  const getFormFieldByNameProp = {
    ...(props.register && props.register(props.name, props.rules)),
  };

  const errorMessage = props.errors && props.errors[props.name]?.message;

  return (
    <div style={{ width: '100%' }}>
      <FormSelect
        {...getFormFieldByNameProp}
        id={props.id}
        onChange={props.onChange}
        actionPanelSelect={props.actionPanelSelect}
        value={props.value}
        disabled={props.disabled}
      >
        <option value={SortedWorkoutsSelectOption.Default} disabled={props.isDefaultOptionDisabled}>
          {props.optionLabel}
        </option>
        {props.options.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </FormSelect>
      {<FieldErrorMessage>{errorMessage}</FieldErrorMessage>}
    </div>
  );
};
