import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { RootState } from '../../store/store';
import { DEFAULT_QUIZ_QUESTIONS_QUANTITY } from './WorkoutQuiz.constants';
import { WorkoutsQuizState } from './WorkoutsQuiz.interfaces';

const initialState: WorkoutsQuizState = {
  workoutsQuizQuestions: [],
  currentQuestion: 0,
  isQuizResultsShown: false,
  correctAnswerCount: 0,
  selectedQuestionQuantity: '',
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

      const slicedQuizQuestions = _.slice(
        shuffleQuizQuestions,
        0,
        state.selectedQuestionQuantity ? Number(state.selectedQuestionQuantity) : DEFAULT_QUIZ_QUESTIONS_QUANTITY
      );

      state.workoutsQuizQuestions = slicedQuizQuestions;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setCurrentQuestion: (state) => {
      const isQuizResultsShown = state.currentQuestion === state.workoutsQuizQuestions.length - 1;

      state.currentQuestion = isQuizResultsShown ? state.currentQuestion : state.currentQuestion + 1;
      state.isQuizResultsShown = isQuizResultsShown;
      state.currentAnswer = initialState.currentAnswer;
    },
    setSelectedAnswerOption: (state, action: PayloadAction<string>) => {
      const correctAnswerOption = state.workoutsQuizQuestions[state.currentQuestion]?.answers.find(
        (answer) => answer.isCorrect === true
      )?.answerOption as string;

      const isAnswerCorrect = action.payload === correctAnswerOption;

      state.correctAnswerCount = isAnswerCorrect ? state.correctAnswerCount + 1 : state.correctAnswerCount;
      state.currentAnswer = action.payload;
    },
    setTryQuizAgain: (state) => {
      state.isQuizResultsShown = initialState.isQuizResultsShown;
      state.correctAnswerCount = initialState.correctAnswerCount;
      state.currentAnswer = initialState.currentAnswer;
      state.currentQuestion = initialState.currentQuestion;
      state.workoutsQuizQuestions = initialState.workoutsQuizQuestions;
      state.status = 'idle';
    },
    setFiftyFiftyChoice: (state) => {
      const correctAnswer = state.workoutsQuizQuestions[state.currentQuestion]?.answers.find(
        (answer) => answer.isCorrect
      ) as QuizAnswer;

      const wrongAnswers = _.shuffle(state.workoutsQuizQuestions[state.currentQuestion]?.answers)
        .filter((answer) => !answer.isCorrect)
        .slice(0, 1);

      state.workoutsQuizQuestions = state.workoutsQuizQuestions.map((question, index) => ({
        ...question,
        answers: state.currentQuestion === index ? [correctAnswer, ...wrongAnswers] : question.answers,
      }));
    },
    setQuestionQuantity: (state, action: PayloadAction<string>) => {
      state.selectedQuestionQuantity = action.payload;
    },
    setClearQuestionQuantity: (state) => {
      const currentQuestion = state.currentQuestion;
      const lastQuestion = state.workoutsQuizQuestions.length - 1;

      if (currentQuestion === lastQuestion) {
        state.selectedQuestionQuantity = initialState.selectedQuestionQuantity;
      }
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

export const selectCorrectAnswerBasedOnIsCorrectProperty = (state: RootState): string => {
  const currentQuestion = state.workoutsQuizQuestions.currentQuestion;
  const availableWorkoutsQuizQuestions = state.workoutsQuizQuestions.workoutsQuizQuestions;

  const getAnswersBasedOnCurrentQuestion: QuizAnswer[] = availableWorkoutsQuizQuestions[currentQuestion]?.answers ?? [];

  return getAnswersBasedOnCurrentQuestion.find((answer) => answer.isCorrect === true)?.answerOption as string;
};

export const selectCurrentAnswer = (state: RootState): string => state.workoutsQuizQuestions.currentAnswer;

export const selectTotalQuestions = (state: RootState): number =>
  state.workoutsQuizQuestions.workoutsQuizQuestions.length;

export const selectCorrectAnswers = (state: RootState): number => state.workoutsQuizQuestions.correctAnswerCount;

export const selectWrongAnswers = (state: RootState): number =>
  state.workoutsQuizQuestions.currentQuestion + 1 - state.workoutsQuizQuestions.correctAnswerCount;
export const selectSelectedQuestionQuantity = (state: RootState): string | undefined =>
  state.workoutsQuizQuestions.selectedQuestionQuantity;

export const {
  setWorkoutsQuizQuestions,
  setCurrentQuestion,
  clearWorkoutQuiz,
  setLoadingStatus,
  setSelectedAnswerOption,
  setTryQuizAgain,
  setFiftyFiftyChoice,
  setQuestionQuantity,
  setClearQuestionQuantity,
} = WorkoutsQuizQuestionsSlice.actions;

export default WorkoutsQuizQuestionsSlice.reducer;
