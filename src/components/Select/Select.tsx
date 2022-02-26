import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { WorkoutType } from '../../modules/Workouts/components/WorkoutForm/Form.interfaces';
import { FieldError } from '../Input/Input.styled';
import { FormSelect } from './Select.styled';

interface SelectOptions {
  id: number;
  value: string;
}

interface SelectProps {
  value?: WorkoutType;
  options: SelectOptions[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  isRequired?: boolean;
  register?: ReturnType<typeof useForm>['register'];
  error?: FieldErrors<FieldValues>;
}

export const Select = (props: SelectProps): ReactElement => {
  const getFormFieldByNameProp = {
    ...(props.register && props.register(props.name ?? '', { required: props.isRequired })),
  };

  return (
    <FormSelect value={props.value} {...getFormFieldByNameProp} id={props.id} onChange={props.onChange}>
      {props.options.map((workoutType) => (
        <option key={workoutType.id} value={workoutType.value}>
          {workoutType.value}
        </option>
      ))}
      {props.error && <FieldError>{props.error.message}</FieldError>}
    </FormSelect>
  );
};
