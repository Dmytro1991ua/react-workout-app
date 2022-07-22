import { Cross } from '@styled-icons/entypo/Cross';
import { Checkmark } from '@styled-icons/evaicons-solid/Checkmark';
import { format } from 'date-fns';
import { upperFirst } from 'lodash';
import React, { ReactElement, useMemo } from 'react';
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { v4 as uuidv4 } from 'uuid';

import Badge from '../../components/Badge/Badge';
import { useAppSelector } from '../../store/store.hooks';
import { selectWorkouts } from '../Workouts/Workouts.slice';
import SearchInput from './components/SearchInput/SearchInput';
import TableBody from './components/TableBody/TableBody';
import TableHeader from './components/TableHeader/TableHeader';
import TablePagination from './components/TablePagination/TablePagination';
import { TABLE_COLUMNS } from './TableColumns';
import { DEFAULT_NUMBER_OF_ROWS_IN_ONE_PAGE } from './WorkoutsDetails.constants';
import { TableWrapper, WorkoutsDetailsSection } from './WorkoutsDetails.styled';

const WorkoutDetails = (): ReactElement => {
  const availableWorkouts = useAppSelector(selectWorkouts);

  const workoutsDetails: WorkoutsDetailsItem[] = availableWorkouts.map((workout) => ({
    id: uuidv4(),
    selectedValue: upperFirst(workout.selectedValue),
    cadence: workout.cadence ?? 'N/A',
    duration: workout.duration,
    distance: workout.distance,
    speed: (workout.speed as number) ?? 'N/A',
    pace: (workout.pace as number) ?? 'N/A',
    elevationGain: workout.elevationGain ?? 'N/A',
    date: format(new Date(workout.createdAt as string), 'M/d/yyyy') ?? 'N/A',
    time: format(new Date(workout.createdAt as string), 'HH:mm a') ?? 'N/A',
    city: `${workout.weatherInfo?.city}, ${workout.weatherInfo?.countryInfo.country}` ?? 'N/A',
    weatherInfo: workout.weatherInfo?.weatherInfo[0].main ?? 'N/A',
    inFavorites: workout.isFavorite ? (
      <Badge icon={<Checkmark />} backgroundColor='mantisDarker' />
    ) : (
      <Badge icon={<Cross />} backgroundColor='tomato' />
    ),
  }));

  const columns = useMemo(() => TABLE_COLUMNS, []);
  const data = useMemo<WorkoutsDetailsItem[]>(() => workoutsDetails, []);

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
    rows,
  } = useTable<WorkoutsDetailsItem>(
    {
      columns,
      data,
      disableSortRemove: true,
      defaultCanSort: true,
      initialState: {
        sortBy: [{ id: data[0].id, desc: false }],
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
        {rows.length >= DEFAULT_NUMBER_OF_ROWS_IN_ONE_PAGE && (
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
        )}
      </TableWrapper>
    </WorkoutsDetailsSection>
  );
};

export default WorkoutDetails;
