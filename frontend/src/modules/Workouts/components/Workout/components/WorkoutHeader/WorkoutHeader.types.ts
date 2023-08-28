export type WorkoutHeaderConfigProps = {
  isWorkoutInFavorites: boolean;
  currentWeatherIcon: string | null;
  workout: WorkoutItem;
  onOpenModal: () => void;
  onOpenWeatherInfoModal: () => void;
  onWorkoutEdit: (id: string) => void;
  onAddingToFavorites: (id: string) => void;
};
