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
