export type WorkoutType = 'running' | 'cycling';

export interface WorkoutFormInitialValues {
  workoutType?: WorkoutType;
  distance: number;
  duration: number;
  cadence?: string;
  elevationGain?: string;
}
