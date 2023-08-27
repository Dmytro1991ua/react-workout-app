import { FieldError } from 'react-hook-form';

export type WorkoutType = 'running' | 'cycling';

export type WorkoutFormInitialValues = {
  workoutType?: WorkoutType;
  distance: number | string;
  duration: number | string;
  cadence?: string;
  elevationGain?: string;
};

export type FormFieldErrors = {
  workoutType?: FieldError;
  distance?: FieldError;
  duration?: FieldError;
  cadence?: FieldError;
  elevationGain?: FieldError;
};
