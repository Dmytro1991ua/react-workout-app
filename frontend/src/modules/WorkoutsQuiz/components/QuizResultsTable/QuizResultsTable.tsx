import React, { ReactElement, useMemo } from 'react';

import { useAppSelector } from '../../../../store/store.hooks';
import { selectCorrectAnswers, selectTotalQuestions, selectWrongAnswers } from '../../WorkoutsQuiz.slice';
import { quizResultsTableConfig } from './QuizResultsTable.config';
import { Cell, Table } from './QuizResultsTable.styled';

const QuizResultsTable = React.memo((): ReactElement => {
  const totalQuestions = useAppSelector(selectTotalQuestions);
  const correctAnswers = useAppSelector(selectCorrectAnswers);
  const wrongAnswers = useAppSelector(selectWrongAnswers);
  const percentage = (correctAnswers / totalQuestions) * 100;

  const quizResultsTable = useMemo(
    () =>
      quizResultsTableConfig({
        correctAnswers,
        percentage: `${percentage.toFixed(2)} %`,
        totalQuestions,
        totalScore: `${correctAnswers} / ${totalQuestions}`,
        wrongAnswers,
      }),
    []
  );

  return (
    <Table>
      <tbody>
        {quizResultsTable.map((item) => (
          <tr key={item.id}>
            <Cell>{item.label}</Cell>
            <Cell>
              <span>{item.value}</span>
            </Cell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
});

export default QuizResultsTable;
