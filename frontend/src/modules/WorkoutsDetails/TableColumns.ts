import { Column } from 'react-table';

export const TABLE_COLUMNS: Column<WorkoutsDetailsItem>[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Workout Type',
    accessor: 'selectedValue',
  },
  {
    Header: 'Duration (min)',
    accessor: 'duration',
  },
  {
    Header: 'Distance (km)',
    accessor: 'distance',
  },
  {
    Header: 'Cadence (step / min)',
    accessor: 'cadence',
  },
  {
    Header: 'Elevation Gain (meters)',
    accessor: 'elevationGain',
  },
  {
    Header: 'Speed (km / h)',
    accessor: 'speed',
  },
  {
    Header: 'Pace (min / km)',
    accessor: 'pace',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Time',
    accessor: 'time',
  },
  {
    Header: 'Weather Info',
    accessor: 'weatherInfo',
  },
  {
    Header: 'In Favorites',
    accessor: 'inFavorites',
  },
];
