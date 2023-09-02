import React, { ReactElement } from 'react';
import { Row, TableBodyProps } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

interface CustomTableBodyProps {
  page: Row<WorkoutsDetailsItem>[];
  getTableBodyProps: TableBodyProps;
  prepareRow: (row: Row<WorkoutsDetailsItem>) => void;
}

const TableBody = ({ page, getTableBodyProps, prepareRow }: CustomTableBodyProps): ReactElement => {
  return (
    <tbody {...getTableBodyProps} className='body'>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} key={uuidv4()} className='tr'>
            {row.cells.map((cell) => {
              return (
                <td {...cell.getCellProps()} key={uuidv4()} className='td'>
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
