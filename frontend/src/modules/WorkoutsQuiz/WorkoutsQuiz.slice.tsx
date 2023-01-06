import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { RootState } from '../../store/store';

interface WorkoutsQuizState {
  workoutsQuizQuestions: WorkoutQuiz[];
  currentQuestion: number;
  isQuizResultsShown: boolean;
  correctAnswerCount: number;
  isAnswerCorrect: boolean;
  currentAnswer: string;
  status: Status;
}

interface SelectedAnswerOption {
  isAnswerCorrect: boolean;
  answerOption: string;
}

const initialState: WorkoutsQuizState = {
  workoutsQuizQuestions: [],
  currentQuestion: 0,
  isQuizResultsShown: false,
  correctAnswerCount: 0,
  isAnswerCorrect: false,
  currentAnswer: '',
  status: 'loading',
};

export const WorkoutsQuizQuestionsSlice = createSlice({
  name: 'workoutsQuizQuestionsSlice',
  initialState,
  reducers: {
    setWorkoutsQuizQuestions: (state, action: PayloadAction<WorkoutQuiz[]>) => {
      const shuffleQuizQuestions = _.shuffle(action.payload).map((question) => ({
        ...question,
        answers: _.shuffle(question.answers),
      }));
      const slicedQuizQuestions = _.slice(shuffleQuizQuestions, 0, 10);

      state.workoutsQuizQuestions = slicedQuizQuestions;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setCurrentQuestion: (state) => {
      const isQuizResultsShown = state.currentQuestion === state.workoutsQuizQuestions.length - 1;

      state.currentQuestion = isQuizResultsShown ? state.currentQuestion : state.currentQuestion + 1;
      state.isQuizResultsShown = isQuizResultsShown;
      state.currentAnswer = initialState.currentAnswer;
    },
    setSelectedAnswerOption: (state, action: PayloadAction<SelectedAnswerOption>) => {
      const isAnswerCorrect = action.payload.isAnswerCorrect;

      state.correctAnswerCount = isAnswerCorrect ? state.correctAnswerCount + 1 : state.correctAnswerCount;
      state.currentAnswer = action.payload.answerOption;
      state.isAnswerCorrect = action.payload.isAnswerCorrect;
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

export const selectIsQuizResultsShown = (state: RootState): boolean => state.workoutsQuizQuestions.isQuizResultsShown;

export const selectIsAnswerCorrect = (state: RootState): boolean => state.workoutsQuizQuestions.isAnswerCorrect;

export const selectCorrectAnswerBasedOnIsCorrectProperty = (state: RootState): string => {
  const isQuizAnswerCorrect = state.workoutsQuizQuestions.isAnswerCorrect;
  const currentQuestion = state.workoutsQuizQuestions.currentQuestion;
  const availableWorkoutsQuizQuestions = state.workoutsQuizQuestions.workoutsQuizQuestions;

  const getAnswersBasedOnCurrentQuestion: QuizAnswer[] = availableWorkoutsQuizQuestions[currentQuestion]?.answers ?? [];

  return getAnswersBasedOnCurrentQuestion.find((answer) => answer.isCorrect === isQuizAnswerCorrect)
    ?.answerOption as string;
};

export const selectCurrentAnswer = (state: RootState): string => state.workoutsQuizQuestions.currentAnswer;

export const {
  setWorkoutsQuizQuestions,
  setCurrentQuestion,
  clearWorkoutQuiz,
  setLoadingStatus,
  setSelectedAnswerOption,
} = WorkoutsQuizQuestionsSlice.actions;

export default WorkoutsQuizQuestionsSlice.reducer;
