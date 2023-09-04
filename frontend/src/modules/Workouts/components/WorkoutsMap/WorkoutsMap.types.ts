export interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  isFormShown: boolean;
  workouts: WorkoutItem[];
  setEditableWorkoutItemId: (value: string | null) => void;
  isSubmitted: boolean | null;
  setGroupRef: (value: L.FeatureGroup<any> | null) => void;
  setMapRef: (value: L.Map | null) => void;
}
