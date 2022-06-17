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
    setUpdateWorkout: (state, action: PayloadAction<WorkoutItem>) => {
      state.workouts.map((workout) => (workout._id === action.payload._id ? action.payload : workout));
      state.status = action.payload ? 'idle' : 'failed';
    },
    setDeleteWorkout: (state, action) => {
      state.workouts = state.workouts.filter((workout) => workout._id !== action.payload);
      state.status = action.payload ? 'idle' : 'failed';
    },
    setDeleteAllWorkouts: (state) => {
      state.workouts = [];
    },
    setSortedWorkoutsSelectOption: (state, action: PayloadAction<SortedWorkoutsSelectOption>) => {
      state.sortedWorkoutsSelectOption = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setAddWorkoutToFavorites: (state, action) => {
      state.workouts = state.workouts.map((workout) => (workout._id === action.payload._id ? action.payload : workout));
      state.status = action.payload ? 'idle' : 'failed';
    },
    setLoadingStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    clearWorkouts: () => initialState,
  },
});

export const selectWorkouts = (state: RootState): WorkoutItem[] => state.workouts.workouts;

export const selectSortedWorkoutsSelectOption = (state: RootState): SortedWorkoutsSelectOption =>
  state.workouts.sortedWorkoutsSelectOption;
export const selectAreWorkoutsLoading = (state: RootState): boolean => state.workouts.status === 'loading';
export const selectUpdatedWorkout =
  (id: string | null) =>
  (state: RootState): WorkoutItem | null =>
    state.workouts.workouts.find((workout) => workout._id === id) ?? null;

export const {
  setWorkouts,
  clearWorkouts,
  setSortedWorkoutsSelectOption,
  setDeleteAllWorkouts,
  setAddWorkoutToFavorites,
  setLoadingStatus,
  setCreateWorkout,
  setUpdateWorkout,
  setDeleteWorkout,
} = WorkoutsSlice.actions;

export default WorkoutsSlice.reducer;
