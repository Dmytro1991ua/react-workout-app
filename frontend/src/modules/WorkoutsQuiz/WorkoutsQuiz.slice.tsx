import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';

interface WorkoutsState {
  workoutsQuizQuestions: WorkoutQuiz[];
  currentQuestion: number;
  status: Status;
}

const initialState: WorkoutsState = {
  workoutsQuizQuestions: [],
  currentQuestion: 0,
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
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    clearWorkoutQuiz: () => initialState,
  },
});

export const selectWorkoutsQuizQuestions = (state: RootState): WorkoutQuiz[] =>
  state.workoutsQuizQuestions.workoutsQuizQuestions;

export const selectCurrentQuestion = (state: RootState): number => state.workoutsQuizQuestions.currentQuestion;

export const selectAreQuizQuestionsLoading = (state: RootState): boolean =>
  state.workoutsQuizQuestions.status === 'loading';

export const { setWorkoutsQuizQuestions, setCurrentQuestion, clearWorkoutQuiz, setLoadingStatus } =
  WorkoutsQuizQuestionsSlice.actions;

export default WorkoutsQuizQuestionsSlice.reducer;
