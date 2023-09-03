import { QuizResultTable } from '../../WorkoutsQuiz.interfaces';
import { Cell } from './QuizResultsTable.styled';

export const generateQuizResultsTableBody = (config: QuizResultTable[]): JSX.Element[] =>
  config.map(({ id, label, value }) => (
    <tr key={id}>
      <Cell>{label}</Cell>
      <Cell>
        <span>{value}</span>
      </Cell>
    </tr>
  ));
