import { ArrowDown, ArrowUp } from '@styled-icons/evaicons-solid';
import React, { ReactElement } from 'react';
import { HeaderGroup } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

import { TableCellWrapper } from './../../WorkoutsDetails.styled';

interface TableHeaderProps {
  headerGroups: HeaderGroup<WorkoutsDetailsItem>[];
}

const TableHeader = ({ headerGroups }: TableHeaderProps): ReactElement => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())} key={uuidv4()}>
              <TableCellWrapper>
                <span>{column.render('Header')}</span>
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ArrowDown style={{ width: '2.5rem', height: '2.5rem' }} />
                    ) : (
                      <ArrowUp style={{ width: '2.5rem', height: '2.5rem' }} />
                    )
                  ) : (
                    ''
                  )}
                </span>
              </TableCellWrapper>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
