import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { RootState } from '../../store/store';
import { SelectedAnswerOption, WorkoutsQuizState } from './WorkoutsQuiz.interfaces';

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
    setTryQuizAgain: (state) => {
      state.isQuizResultsShown = initialState.isQuizResultsShown;
      state.correctAnswerCount = initialState.correctAnswerCount;
      state.currentAnswer = initialState.currentAnswer;
      state.currentQuestion = initialState.currentQuestion;
      state.isAnswerCorrect = initialState.isAnswerCorrect;
      state.workoutsQuizQuestions = initialState.workoutsQuizQuestions;
      state.status = 'idle';
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

export const selectTotalQuestions = (state: RootState): number =>
  state.workoutsQuizQuestions.workoutsQuizQuestions.length;

export const selectCorrectAnswers = (state: RootState): number => state.workoutsQuizQuestions.correctAnswerCount + 1;

export const selectWrongAnswers = (state: RootState): number =>
  state.workoutsQuizQuestions.currentQuestion - state.workoutsQuizQuestions.correctAnswerCount;

export const {
  setWorkoutsQuizQuestions,
  setCurrentQuestion,
  clearWorkoutQuiz,
  setLoadingStatus,
  setSelectedAnswerOption,
  setTryQuizAgain,
} = WorkoutsQuizQuestionsSlice.actions;

export default WorkoutsQuizQuestionsSlice.reducer;
