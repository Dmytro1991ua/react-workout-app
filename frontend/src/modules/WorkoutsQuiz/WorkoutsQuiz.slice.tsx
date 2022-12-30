import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';

interface WorkoutsState {
  workoutsQuizQuestions: WorkoutQuiz[];
  status: Status;
}

const initialState: WorkoutsState = {
  workoutsQuizQuestions: [],
  status: 'loading',
};

export const WorkoutsQuizQuestionsSlice = createSlice({
  name: 'workoutsQuizQuestionsSlice',
  initialState,
  reducers: {
    setWorkoutsQuizQuestions: (state, action: PayloadAction<WorkoutQuiz[]>) => {
      state.workoutsQuizQuestions = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setLoadingStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    clearWorkouts: () => initialState,
  },
});

export const selectWorkoutsQuizQuestions = (state: RootState): WorkoutQuiz[] =>
  state.workoutsQuizQuestions.workoutsQuizQuestions;

export const selectAreWorkoutsLoading = (state: RootState): boolean => state.workouts.status === 'loading';

export const { setWorkoutsQuizQuestions, clearWorkouts, setLoadingStatus } = WorkoutsQuizQuestionsSlice.actions;

export default WorkoutsQuizQuestionsSlice.reducer;
