import { FieldValues } from 'react-hook-form';

import { FormActionButtonConfig, InputConfigProps, SelectConfigProps } from './App.types';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { Select } from './components/Select/Select';
import FormInput from './modules/Workouts/components/FormInput/FormInput';
import { FieldInputWrapper, FormLabel, FormRow } from './modules/Workouts/components/WorkoutForm/Form.styled';
export function handleKeyDownOnInputField(
  event: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>
): false | void {
  return ['e', 'E', '+', '-', '.'].includes(event.key) && event.preventDefault();
}

export const generateFormInputs = <T extends FieldValues>({
  config,
  isWorkoutForm,
  errors,
  register,
}: InputConfigProps<T>): JSX.Element[] =>
  config.map(
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
      label,
    }) => {
      if (isWorkoutForm) {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <FieldInputWrapper>
              <FormInput<T>
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
                fullWidth={fullWidth}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                disabled={disabled}
              />
            </FieldInputWrapper>
          </FormRow>
        );
      }

      return (
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
      );
    }
  );

export const generateFormSelects = <T extends FieldValues>({
  config,
  isWorkoutForm,
  errors,
  register,
}: SelectConfigProps<T>): JSX.Element[] =>
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
      label,
    }) => {
      if (isWorkoutForm) {
        return (
          <FormRow>
            <FormLabel>{label}</FormLabel>
            <Select<T>
              key={id}
              options={options}
              actionPanelSelect={actionPanelSelect}
              name={name}
              id={id}
              register={register}
              errors={errors}
              value={value}
              optionLabel={optionLabel}
              onChange={onChange}
              isDefaultOptionDisabled={isDefaultOptionDisabled}
              fullWidth={fullWidth}
              disabled={disabled}
            />
          </FormRow>
        );
      }

      return (
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
      );
    }
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
