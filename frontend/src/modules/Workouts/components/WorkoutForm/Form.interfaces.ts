export type WorkoutType = 'running' | 'cycling';

export type WorkoutFormInitialValues = {
  workoutType?: WorkoutType;
  distance: number | string;
  duration: number | string;
  cadence?: string;
  elevationGain?: string;
};
