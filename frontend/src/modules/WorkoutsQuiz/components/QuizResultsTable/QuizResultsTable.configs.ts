import { v4 as uuidv4 } from 'uuid';

import { QuizResultsTableValue, QuizResultTable } from '../../WorkoutsQuiz.interfaces';

export const quizResultsTableBodyConfig = ({
  correctAnswers,
  percentage,
  totalQuestions,
  totalScore,
  wrongAnswers,
}: QuizResultsTableValue): QuizResultTable[] => {
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
