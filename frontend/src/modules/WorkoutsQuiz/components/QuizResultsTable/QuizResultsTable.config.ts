import { v4 as uuidv4 } from 'uuid';

import { QuizResultsTableValue, QuizResultTable } from '../../WorkoutsQuiz.interfaces';

export const quizResultsTableConfig = (payload: QuizResultsTableValue): QuizResultTable[] => {
  const { correctAnswers, percentage, totalQuestions, totalScore, wrongAnswers } = payload;

  return [
    {
      id: uuidv4(),
      label: 'Total Questions',
      value: totalQuestions ?? 'N/A',
    },
    {
      id: uuidv4(),
      label: 'Correct Answers',
      value: correctAnswers ?? 'N/A',
    },
    {
      id: uuidv4(),
      label: 'Wrong Answers',
      value: wrongAnswers ?? 'N/A',
    },
    {
      id: uuidv4(),
      label: 'Percentage',
      value: percentage ?? 'N/A',
    },
    {
      id: uuidv4(),
      label: 'Your total score',
      value: totalScore ?? 'N/A',
    },
  ];
};
