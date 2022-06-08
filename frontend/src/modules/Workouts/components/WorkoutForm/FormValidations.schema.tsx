import * as yup from 'yup';
import { WorkoutFormInitialValues, WorkoutType } from './Form.interfaces';

export const WORKOUT_FORM_INITIAL_VALUES = (editableWorkoutItem?: WorkoutItem | null): WorkoutFormInitialValues => {
  return {
    workoutType: (editableWorkoutItem?.selectedValue as WorkoutType) ?? undefined,
    distance: editableWorkoutItem?.distance ?? '',
    duration: editableWorkoutItem?.duration ?? '',
    cadence: editableWorkoutItem?.cadence ?? '',
    elevationGain: editableWorkoutItem?.elevationGain ?? '',
  };
};

export const WORKOUT_FORM_VALIDATION_SCHEMA: yup.SchemaOf<WorkoutFormInitialValues> = yup.object().shape({
  workoutType: yup.mixed().label('Work Type'),
  distance: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .label('Distance')
    .required(),
  duration: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .label('Duration')
    .required(),
  cadence: yup.string().label('Cadence'),
  elevationGain: yup.string().label('Elevation Gain'),
});
