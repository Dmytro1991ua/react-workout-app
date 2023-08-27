export interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  isFormShown: boolean;
  workouts: WorkoutItem[];
  setEditableWorkoutItemId: (value: string | null) => void;
  isSubmitted: boolean | null;
  setWorkoutMap: (value: L.Map | null) => void;
  setGroupRef: (value: L.FeatureGroup<any> | null) => void;
  setMapRef: (value: L.Map | null) => void;
}
