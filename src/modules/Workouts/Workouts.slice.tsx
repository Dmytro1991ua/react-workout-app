import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

import { SortedWorkoutsSelectOption } from './Workouts.enums';

interface WorkoutsState {
  workouts: WorkoutItem[];
  sortedWorkoutsSelectOption: SortedWorkoutsSelectOption;
  status: Status;
}

const initialState: WorkoutsState = {
  workouts: [],
  sortedWorkoutsSelectOption: SortedWorkoutsSelectOption.Default,
  status: 'loading',
};

export const WorkoutsSlice = createSlice({
  name: 'workoutsSlice',
  initialState,
  reducers: {
    setWorkouts: (state, action: PayloadAction<WorkoutItem[]>) => {
      state.workouts = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setCreateWorkout: (state, action: PayloadAction<WorkoutItem>) => {
      state.workouts.push(action.payload);
      state.status = action.payload ? 'idle' : 'failed';
    },
    setSortedWorkoutsSelectOption: (state, action: PayloadAction<SortedWorkoutsSelectOption>) => {
      state.sortedWorkoutsSelectOption = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setDeleteAllWorkouts: (state) => {
      state.workouts = [];
    },
    setAddWorkoutToFavorites: (state, action) => {
      const workoutIndex = state.workouts.findIndex((workout) => workout.id === action.payload.id);

      state.workouts[workoutIndex].isFavorite = action.payload.isFavorite;
      state.status = action.payload ? 'idle' : 'failed';
    },
    clearWorkouts: () => initialState,
  },
});

export const selectWorkouts = (state: RootState): WorkoutItem[] => state.workouts.workouts;

export const selectSortedWorkoutsSelectOption = (state: RootState): SortedWorkoutsSelectOption =>
  state.workouts.sortedWorkoutsSelectOption;

export const {
  setWorkouts,
  setCreateWorkout,
  clearWorkouts,
  setSortedWorkoutsSelectOption,
  setDeleteAllWorkouts,
  setAddWorkoutToFavorites,
} = WorkoutsSlice.actions;

export default WorkoutsSlice.reducer;
