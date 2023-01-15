import { v4 as uuidv4 } from 'uuid';

export const QUiZ_INTRODUCTION_TITLE =
  'Challenge yourself and check your real knowledge in exclusive Workouts, Fitness, Healthy and Lifestyle quiz';

export const QUIZ_ENDING_MESSAGE = 'The quiz has ended due to time running out';
export const QUIZ_DEFAULT_TIMER = 60;
export const DEFAULT_QUIZ_QUESTIONS_QUANTITY = 10;
export const QUIZ_QUESTIONS_OPTIONS: SelectedOption[] = [
  {
    id: uuidv4(),
    value: '15',
  },
  {
    id: uuidv4(),
    value: '20',
  },
  {
    id: uuidv4(),
    value: '25',
  },
  {
    id: uuidv4(),
    value: '30',
  },
  {
    id: uuidv4(),
    value: '35',
  },
  {
    id: uuidv4(),
    value: '40',
  },
];

export const QUIZ_FALLBACK_MESSAGE_TITLE = 'There is no available quiz questions';
export const QUIZ_FALLBACK_MESSAGE_SUBTITLE =
  'Please check your internet connection, reload the page or sign in to application one more time';
