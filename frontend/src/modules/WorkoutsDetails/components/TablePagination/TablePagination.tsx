import React, { ReactElement } from 'react';
import { TableState } from 'react-table';

import FormInput from '../../../Workouts/components/FormInput/FormInput';
import { TABLE_PAGE_SIZE_OPTIONS } from '../../WorkoutsDetails.constants';
import {
  GoToPageButton,
  NextButton,
  NextButtonIcon,
  PreviousButton,
  PreviousButtonIcon,
  TablePaginationActions,
  TablePaginationContainer,
} from '../../WorkoutsDetails.styled';
import { Select } from './../../../../components/Select/Select';

interface TablePaginationProps {
  pageOptions: number[];
  state: TableState<WorkoutsDetailsItem>;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  nextPage: () => void;
  previousPage: () => void;
  setPageSize: (pageSize: number) => void;
}

const TablePagination = ({
  state,
  pageOptions,
  canPreviousPage,
  canNextPage,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
}: TablePaginationProps): ReactElement => {
  const rowsPerPage = (
    <>
      <span style={{ marginRight: '0.7rem' }}>Rows per page:</span>
      <Select
        name='pageSize'
        options={TABLE_PAGE_SIZE_OPTIONS}
        value={state.pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      />
    </>
  );

  const pagesCount = (
    <span style={{ marginLeft: '3rem' }}>
      Page:{' '}
      <strong>
        {state.pageIndex + 1} of {pageOptions.length}
      </strong>
    </span>
  );

  const goToPage = (
    <>
      <span style={{ marginLeft: '3rem', marginRight: '0.7rem' }}>Go to page:</span>
      <FormInput
        name='gotToPage'
        type='number'
        min={1}
        max={10000}
        defaultValue={state.pageIndex + 1}
        onChange={(e) => {
          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;

          gotoPage(pageNumber);
        }}
      />
    </>
  );

  const paginationActions = (
    <TablePaginationActions>
      <GoToPageButton
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        backgroundColor='mantisDarker'
        hoverColor='mantis'
        color='white'
      >
        <PreviousButtonIcon />
      </GoToPageButton>
      <PreviousButton
        disabled={!canPreviousPage}
        onClick={() => previousPage()}
        backgroundColor='lighterBlue'
        hoverColor='darkGrey'
        color='white'
      >
        Previous Page
      </PreviousButton>
      <NextButton
        disabled={!canNextPage}
        onClick={() => nextPage()}
        backgroundColor='mantisDarker'
        hoverColor='mantis'
        color='white'
      >
        Next Page
      </NextButton>
      <GoToPageButton
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        backgroundColor='lighterBlue'
        hoverColor='darkGrey'
        color='white'
      >
        <NextButtonIcon />
      </GoToPageButton>
    </TablePaginationActions>
  );

  return (
    <TablePaginationContainer>
      {rowsPerPage}
      {pagesCount}
      {goToPage}
      {paginationActions}
    </TablePaginationContainer>
  );
};

export default TablePagination;
