import * as yup from 'yup';
import { WorkoutFormInitialValues } from './Form.interfaces';

export const WORKOUT_FORM_INITIAL_VALUES: WorkoutFormInitialValues = {
  workoutType: 'running',
  distance: 0,
  duration: 0,
  cadence: '',
  elevationGain: '',
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
