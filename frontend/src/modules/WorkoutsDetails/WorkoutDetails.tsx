import { Cross } from '@styled-icons/entypo/Cross';
import { Checkmark } from '@styled-icons/evaicons-solid/Checkmark';
import { format } from 'date-fns';
import { upperFirst } from 'lodash';
import { ReactElement, useMemo } from 'react';
import { useFlexLayout, useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table';
import { useSticky } from 'react-table-sticky';
import { v4 as uuidv4 } from 'uuid';

import Badge from '../../components/Badge/Badge';
import { useAppSelector } from '../../store/store.hooks';
import { selectWorkouts } from '../Workouts/Workouts.slice';
import FallbackMessage from './../Workouts/components/FallbackMessage/FallbackMessage';
import SearchInput from './components/SearchInput/SearchInput';
import TableBody from './components/TableBody/TableBody';
import TableHeader from './components/TableHeader/TableHeader';
import TablePagination from './components/TablePagination/TablePagination';
import { TABLE_COLUMNS } from './TableColumns';
import {
  DEFAULT_NUMBER_OF_ROWS_IN_ONE_PAGE,
  FALLBACK_MESSAGE_DETAILS,
  FALLBACK_MESSAGE_TITLE,
} from './WorkoutsDetails.constants';
import { TableWrapper, WorkoutsDetailsSection } from './WorkoutsDetails.styled';

const WorkoutDetails = (): ReactElement => {
  const availableWorkouts = useAppSelector(selectWorkouts);

  const workoutsDetails: WorkoutsDetailsItem[] = useMemo(
    () =>
      availableWorkouts.map((workout) => ({
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
      })),
    [availableWorkouts]
  );

  const columns = useMemo(() => TABLE_COLUMNS, []);

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
    preGlobalFilteredRows,
    rows,
  } = useTable<WorkoutsDetailsItem>(
    {
      columns,
      data: workoutsDetails,
      disableSortRemove: true,
      defaultCanSort: true,
      initialState: {
        sortBy: [{ id: workoutsDetails.length ? workoutsDetails[0].id : '', desc: false }],
        hiddenColumns: ['id'],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useFlexLayout,
    useSticky
  );

  return (
    <WorkoutsDetailsSection>
      {!workoutsDetails.length ? (
        <FallbackMessage title={FALLBACK_MESSAGE_TITLE} message={FALLBACK_MESSAGE_DETAILS} />
      ) : (
        <>
          <SearchInput
            globalFilter={state.globalFilter}
            preGlobalFilteredRowsLength={preGlobalFilteredRows.length}
            onSetFilter={setGlobalFilter}
          />
          <TableWrapper>
            <table {...getTableProps()} className='table sticky'>
              <TableHeader headerGroups={headerGroups} />
              <TableBody page={page} prepareRow={prepareRow} getTableBodyProps={getTableBodyProps()} />
            </table>
          </TableWrapper>
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
        </>
      )}
    </WorkoutsDetailsSection>
  );
};

export default WorkoutDetails;
