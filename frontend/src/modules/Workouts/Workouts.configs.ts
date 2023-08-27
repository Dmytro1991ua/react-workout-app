import { filter as _filter, sortBy as _sortBy } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { SortedWorkoutsSelectOption } from './Workouts.enums';

export const sortedWorkoutsByWorkoutTypeAndIndicatorConfig = (
  availableWorkouts: WorkoutItem[],
  workoutsByLastAddedItem: WorkoutItem[]
): Record<SortedWorkoutsSelectOption, WorkoutItem[]> => {
  const sortedWorkoutsConfig: Record<SortedWorkoutsSelectOption, WorkoutItem[]> = {
    [SortedWorkoutsSelectOption.Default]: workoutsByLastAddedItem,
    [SortedWorkoutsSelectOption.LastAdded]: _sortBy(availableWorkouts, 'description', 'desc'),
    [SortedWorkoutsSelectOption.Running]: _filter(availableWorkouts, (workout) => workout.selectedValue === 'running'),
    [SortedWorkoutsSelectOption.Cycling]: _filter(availableWorkouts, (workout) => workout.selectedValue === 'cycling'),
    [SortedWorkoutsSelectOption.Favorite]: _filter(availableWorkouts, (workout) => workout.isFavorite === true),
    [SortedWorkoutsSelectOption.Distance]: _sortBy(availableWorkouts, 'distance', 'desc'),
    [SortedWorkoutsSelectOption.Duration]: _sortBy(availableWorkouts, 'duration', 'desc'),
  };

  return sortedWorkoutsConfig;
};

export const workoutFallbackMessageConfig = ({
  availableWorkouts,
  workoutsByLastAddedItem,
  sortedWorkoutsSelectOption,
}: {
  availableWorkouts: WorkoutItem[];
  workoutsByLastAddedItem: WorkoutItem[];
  sortedWorkoutsSelectOption: SortedWorkoutsSelectOption;
}): WorkoutFallbackMessage[] => {
  const sortedWorkouts = sortedWorkoutsByWorkoutTypeAndIndicatorConfig(availableWorkouts, workoutsByLastAddedItem);

  return [
    {
      id: uuidv4(),
      message: '🏁 To save a new workout just click on the map and fill-out the details on the form',
      title: 'You have no available workouts',
      hasWorkouts: !availableWorkouts.length,
    },
    {
      id: uuidv4(),
      message: '🏃 To save a new running workout just click on the map and fill-out the details on the form',
      title: 'You have no available running workouts',
      hasWorkouts:
        sortedWorkoutsSelectOption === SortedWorkoutsSelectOption.Running &&
        !sortedWorkouts[SortedWorkoutsSelectOption.Running].length,
    },
    {
      id: uuidv4(),
      message: '🚴‍♀️ To save a new cycling workout just click on the map and fill-out the details on the form',
      title: 'You have no available cycling workouts',
      hasWorkouts:
        sortedWorkoutsSelectOption === SortedWorkoutsSelectOption.Cycling &&
        !sortedWorkouts[SortedWorkoutsSelectOption.Cycling].length,
    },
    {
      id: uuidv4(),
      message:
        '🧡 To add a particular workout to favorite just click on a heart icon on a specific workout and keep track on your favorites later on',
      title: 'You have no available favorite workouts',
      hasWorkouts:
        sortedWorkoutsSelectOption === SortedWorkoutsSelectOption.Favorite &&
        !sortedWorkouts[SortedWorkoutsSelectOption.Favorite].length,
    },
  ];
};
