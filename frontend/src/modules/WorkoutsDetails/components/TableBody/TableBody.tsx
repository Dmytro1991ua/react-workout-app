import React, { ReactElement } from 'react';
import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

import { WorkoutsDetailsItem } from '../../WorkoutsDetails.interface';

interface CustomTableBodyProps {
  page: Row<WorkoutsDetailsItem>[];
  getTableBodyProps: (propGetter?: TableBodyPropGetter<WorkoutsDetailsItem> | undefined) => TableBodyProps;
  prepareRow: (row: Row<WorkoutsDetailsItem>) => void;
}

const TableBody = ({ page, getTableBodyProps, prepareRow }: CustomTableBodyProps): ReactElement => {
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} key={uuidv4()}>
            {row.cells.map((cell) => {
              return (
                <td {...cell.getCellProps()} key={uuidv4()}>
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
