import { CustomColumnConfig } from 'react-table';

export const TABLE_COLUMNS: CustomColumnConfig<WorkoutsDetailsItem>[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'City',
    accessor: 'city',
    sticky: 'left',
  },
  {
    Header: 'Workout Type',
    accessor: 'selectedValue',
    sticky: 'left',
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
    width: 190,
  },
  {
    Header: 'Elevation Gain (meters)',
    accessor: 'elevationGain',
    width: 190,
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
