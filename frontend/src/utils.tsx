import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import { FormActionButtonConfig, FormInputConfig, FormSelectConfig } from './App.types';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Select } from './components/Select/Select';

export function handleKeyDownOnInputField(
  event: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>
): false | void {
  return ['e', 'E', '+', '-', '.'].includes(event.key) && event.preventDefault();
}

export const generateFormInputs = <T extends FieldValues>(
  formConfig: FormInputConfig<T>[],
  register?: UseFormRegister<T>,
  errors?: Partial<DeepMap<T, FieldError>>
): JSX.Element[] =>
  formConfig.map(
    ({
      borderColor,
      id,
      max,
      min,
      name,
      placeholder,
      type,
      disabled,
      fullWidth,
      isRequired,
      onChange,
      onKeyDown,
      value,
    }) => (
      <Input<T>
        key={id}
        type={type}
        min={min}
        max={max}
        name={name}
        register={register}
        errors={errors}
        id={id}
        placeholder={placeholder}
        isRequired={isRequired}
        borderColor={borderColor}
        fullWidth={fullWidth}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
    )
  );

export const generateFormSelects = <T extends FieldValues>(config: FormSelectConfig<T>[]): JSX.Element[] =>
  config.map(
    ({
      id,
      name,
      options,
      actionPanelSelect,
      disabled,
      fullWidth,
      isDefaultOptionDisabled,
      onChange,
      optionLabel,
      value,
    }) => (
      <Select<T>
        key={id}
        options={options}
        actionPanelSelect={actionPanelSelect}
        name={name}
        id={id}
        value={value}
        optionLabel={optionLabel}
        onChange={onChange}
        isDefaultOptionDisabled={isDefaultOptionDisabled}
        fullWidth={fullWidth}
        disabled={disabled}
      />
    )
  );

export const generateFormActionButtons = (config: FormActionButtonConfig[]): JSX.Element[] =>
  config.map(({ id, type, backgroundColor, hoverColor, color, label, onClick, disabled, fullWidth }) => (
    <Button
      key={id}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  ));
