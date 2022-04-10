import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { SortedWorkoutsByWorkoutTypeAndIndicator } from '../../modules/Workouts/Workouts.enums';

import { FieldError } from '../Input/Input.styled';
import { FormSelect } from './Select.styled';

interface SelectProps {
  options: SelectedOption[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  isRequired?: boolean;
  register?: ReturnType<typeof useForm>['register'];
  error?: FieldErrors<FieldValues>;
  actionPanelSelect?: boolean;
  optionLabel?: string;
  value?: SortedWorkoutsByWorkoutTypeAndIndicator;
  isDefaultOptionDisabled?: boolean;
}

export const Select = (props: SelectProps): ReactElement => {
  const getFormFieldByNameProp = {
    ...(props.register && props.register(props.name ?? '', { required: props.isRequired })),
  };

  return (
    <FormSelect
      {...getFormFieldByNameProp}
      id={props.id}
      onChange={props.onChange}
      actionPanelSelect={props.actionPanelSelect}
      value={props.value}
    >
      <option value={SortedWorkoutsByWorkoutTypeAndIndicator.Default} disabled={props.isDefaultOptionDisabled}>
        {props.optionLabel}
      </option>
      {props.options.map((item) => {
        return (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        );
      })}
      {props.error && <FieldError>{props.error.message}</FieldError>}
    </FormSelect>
  );
};
