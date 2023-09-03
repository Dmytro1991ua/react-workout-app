import React, { ReactElement } from 'react';

import { useQuizResultsTable } from './hooks/useQuizResultsTable';
import { Table } from './QuizResultsTable.styled';

const QuizResultsTable = React.memo((): ReactElement => {
  const { tableBody } = useQuizResultsTable();

  return (
    <Table>
      <tbody>{tableBody}</tbody>
    </Table>
  );
});

export default QuizResultsTable;
