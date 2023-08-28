import { v4 as uuidv4 } from 'uuid';

import { FormActionButtonConfig } from '../../../../App.types';
import { handleKeyDownOnInputField } from '../../../../utils';
import { WORKOUT_TYPE_SELECTION_OPTIONS } from '../../Workouts.constants';
import { WorkoutFormInitialValues } from './Form.interfaces';
import { WorkoutFormInputConfig, WorkoutFormSelectConfig } from './Form.types';
import { WorkoutFormFieldLabel } from './WorkoutForm.enums';

export const workoutFormSelectConfig = (
  isDisabled: boolean,
  onSelectChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
): WorkoutFormSelectConfig<WorkoutFormInitialValues>[] => {
  return [
    {
      label: WorkoutFormFieldLabel.Type,
      options: WORKOUT_TYPE_SELECTION_OPTIONS,
      name: 'workoutType',
      id: 'workoutType',
      onChange: onSelectChange,
      fullWidth: true,
      optionLabel: 'Select workout type:',
      disabled: isDisabled,
    },
  ];
};

export const workoutFormInputConfig = ({
  isDisabled,
  isCadenceInput,
  isElevationInput,
}: {
  isDisabled: boolean;
  isCadenceInput?: boolean;
  isElevationInput?: boolean;
}): WorkoutFormInputConfig<WorkoutFormInitialValues>[] => {
  const formInputs: WorkoutFormInputConfig<WorkoutFormInitialValues>[] = [
    {
      label: WorkoutFormFieldLabel.Distance,
      placeholder: 'km',
      name: 'distance',
      id: 'distance',
      type: 'number',
      min: 0,
      max: 10000,
      onKeyDown: handleKeyDownOnInputField,
      isRequired: true,
      fullWidth: true,
      disabled: isDisabled,
    },
    {
      label: WorkoutFormFieldLabel.Duration,
      placeholder: 'min',
      name: 'duration',
      id: 'duration',
      type: 'number',
      min: 0,
      max: 10000,
      onKeyDown: handleKeyDownOnInputField,
      isRequired: true,
      fullWidth: true,
      disabled: isDisabled,
    },
  ];

  if (isCadenceInput) {
    formInputs.push({
      label: WorkoutFormFieldLabel.Cadence,
      placeholder: 'step/min',
      name: 'cadence',
      id: 'cadence',
      type: 'number',
      min: 0,
      max: 10000,
      onKeyDown: handleKeyDownOnInputField,
      fullWidth: true,
    });
  }

  if (isElevationInput) {
    formInputs.push({
      label: WorkoutFormFieldLabel.ElevGain,
      placeholder: 'elevation',
      name: 'elevationGain',
      id: 'elevationGainData',
      type: 'number',
      min: 0,
      max: 10000,
      onKeyDown: handleKeyDownOnInputField,
      fullWidth: true,
    });
  }

  return formInputs;
};

export const workoutFormActionButtonConfig = ({
  isDisabled,
  editableWorkoutItemId,
  onClick,
}: {
  editableWorkoutItemId: string | null;
  isDisabled: boolean;
  onClick: () => void | Promise<void>;
}): FormActionButtonConfig[] => {
  return [
    {
      id: uuidv4(),
      type: 'submit',
      fullWidth: true,
      backgroundColor: 'mantis',
      hoverColor: 'mantisDarker',
      color: 'white',
      onClick,
      disabled: isDisabled,
      label: editableWorkoutItemId ? 'Edit workout' : 'Add Workout',
    },
  ];
};
