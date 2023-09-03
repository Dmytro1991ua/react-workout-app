import { useMemo } from 'react';

import { useAppSelector } from '../../../../../store/store.hooks';
import { selectCorrectAnswers, selectTotalQuestions, selectWrongAnswers } from '../../../WorkoutsQuiz.slice';
import { quizResultsTableBodyConfig } from '../QuizResultsTable.configs';
import { generateQuizResultsTableBody } from '../QuizResultsTable.utils';

type ReturnedHookType = {
  tableBody: JSX.Element[];
};

export const useQuizResultsTable = (): ReturnedHookType => {
  const totalQuestions = useAppSelector(selectTotalQuestions);
  const correctAnswers = useAppSelector(selectCorrectAnswers);
  const wrongAnswers = useAppSelector(selectWrongAnswers);

  const percentage = (correctAnswers / totalQuestions) * 100;

  const tableBodyConfig = useMemo(
    () =>
      quizResultsTableBodyConfig({
        correctAnswers,
        percentage: `${percentage.toFixed(2)} %`,
        totalQuestions,
        totalScore: `${correctAnswers} / ${totalQuestions}`,
        wrongAnswers,
      }),
    [correctAnswers, percentage, totalQuestions, wrongAnswers]
  );

  const tableBody = useMemo(() => generateQuizResultsTableBody(tableBodyConfig), [tableBodyConfig]);

  return {
    tableBody,
  };
};
