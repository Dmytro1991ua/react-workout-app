import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';

import { FieldError } from '../Input/Input.styled';
import { FormSelect } from './Select.styled';

interface SelectProps {
  options: SelectOptions[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  isRequired?: boolean;
  register?: ReturnType<typeof useForm>['register'];
  error?: FieldErrors<FieldValues>;
  actionPanelSelect?: boolean;
  optionLabel?: string;
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
    >
      <option value='' hidden>
        {props.optionLabel}
      </option>
      {props.options.map((item) => (
        <option key={item.id} value={item.value}>
          {item.value}
        </option>
      ))}
      {props.error && <FieldError>{props.error.message}</FieldError>}
    </FormSelect>
  );
};
