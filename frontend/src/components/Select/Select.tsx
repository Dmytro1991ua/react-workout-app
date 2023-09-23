import React, { ReactElement } from 'react';
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';

import {
  FeetSelectOptions,
  HeightUnitsSelectOptions,
  InchesSelectOptions,
  WeightUnitsSelectOptions,
} from '../../modules/BMICalculator/BMICalculator.enums';
import { SortedWorkoutsSelectOption } from '../../modules/Workouts/Workouts.enums';
import { FieldErrorMessage } from '../Input/Input.styled';
import { FormSelect } from './Select.styled';

type ValueType =
  | SortedWorkoutsSelectOption
  | WeightUnitsSelectOptions
  | HeightUnitsSelectOptions
  | FeetSelectOptions
  | InchesSelectOptions
  | number
  | string;

type SelectProps = {
  options: SelectedOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  isRequired?: boolean;
  actionPanelSelect?: boolean;
  optionLabel?: string;
  value?: ValueType;
  isDefaultOptionDisabled?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
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
    <>
      <FormSelect
        {...getFormFieldByNameProp}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        $actionPanelSelect={props.actionPanelSelect}
        value={props.value}
        disabled={props.disabled}
        $fullWidth={props.fullWidth}
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
      <FieldErrorMessage>{errorMessage}</FieldErrorMessage>
    </>
  );
};
