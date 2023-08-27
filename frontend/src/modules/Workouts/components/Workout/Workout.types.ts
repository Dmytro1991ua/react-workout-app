export interface WorkoutProps {
  workout: WorkoutItem;
  isFormShownOnWorkoutEdit: (value: boolean) => void;
  isFormShown: boolean;
  setEditableWorkoutItemId: (id: string | null) => void;
  workoutMap: L.Map | null;
}

export type WorkoutActionConfig = {
  id: string;
  icon: JSX.Element | null;
  'data-tip': string;
  'data-for': string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
