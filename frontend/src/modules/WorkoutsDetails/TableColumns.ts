import { Column } from 'react-table';

import { WorkoutsDetailsItem } from './WorkoutsDetails.interface';

export const TABLE_COLUMNS: Column<WorkoutsDetailsItem>[] = [
  {
    Header: 'Id',
    Footer: 'Id', // Here Footer has the same colums as Header
    accessor: 'id', // Allows to associate a Header (particular column) with specific row of Data
    //Filter: ColumnFilter, //  ColumnFilter => custom filter input component
    //disableFilters: true, //disable and hiding filter input for ID column
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Date Of Birth',
    Footer: 'Date Of Birth',
    accessor: 'dateOfBirth',
    //disableFilters: true,
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
    //disableFilters: true,
  },
];
