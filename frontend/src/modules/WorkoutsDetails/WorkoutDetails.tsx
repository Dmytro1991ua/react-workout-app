import React, { ReactElement, useMemo } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';

import SearchInput from './components/SearchInput/SearchInput';
import TableBody from './components/TableBody/TableBody';
import TableHeader from './components/TableHeader/TableHeader';
import TablePagination from './components/TablePagination/TablePagination';
import MOCK_DATA from './MOCK_DATA.json';
import { TABLE_COLUMNS } from './TableColumns';
import { WorkoutsDetailsItem } from './WorkoutsDetails.interface';
import { TableWrapper, WorkoutsDetailsSection } from './WorkoutsDetails.styled';

const WorkoutDetails = (): ReactElement => {
  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo<WorkoutsDetailsItem[]>(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canPreviousPage,
    canNextPage,
    state,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
  } = useTable<WorkoutsDetailsItem>(
    {
      columns,
      data,
      disableSortRemove: true,
      defaultCanSort: true,
      initialState: {
        sortBy: [{ id: data[0].id.toString(), desc: false }],
        hiddenColumns: ['id'],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <WorkoutsDetailsSection>
      <TableWrapper>
        <SearchInput globalFilter={state.globalFilter} onSetFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <TableHeader headerGroups={headerGroups} />
          <TableBody page={page} prepareRow={prepareRow} getTableBodyProps={getTableBodyProps} />
        </table>
        <TablePagination
          state={state}
          pageOptions={pageOptions}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
        />
      </TableWrapper>
    </WorkoutsDetailsSection>
  );
};

export default WorkoutDetails;
