export interface WorkoutsQuizState {
  workoutsQuizQuestions: WorkoutQuiz[];
  currentQuestion: number;
  isQuizResultsShown: boolean;
  correctAnswerCount: number;
  currentAnswer: string;
  status: Status;
}

export interface QuizResultTable {
  id: string;
  label: string;
  value: string | number;
}

export interface QuizResultsTableValue {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  percentage: string;
  totalScore: string;
}
