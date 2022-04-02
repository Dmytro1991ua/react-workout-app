import L from 'leaflet';
import { v4 as uuidv4 } from 'uuid';

import InitialWorkoutMarker from '../../assets/images/leaflet/marker.png';

export const WORKOUT_SUCCESS_DELETE_MESSAGE = 'Your workout has been successfully deleted';

export const MONTHS_LIST = [
  'January',
  'Fabruary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WORKOUT_TYPE_SELECTION_OPTIONS_MOCK = [
  { id: uuidv4(), value: 'running' },
  { id: uuidv4(), value: 'cycling' },
];

export const SORT_BY_WORKOUT_TYPE_SELECTION_OPTIONS_MOCK = [
  { id: uuidv4(), value: '🏃 Running' },
  { id: uuidv4(), value: '🚴‍♀️ Cycling' },
  { id: uuidv4(), value: '🧡 Favorite' },
  { id: uuidv4(), value: '🕐 Last Added' },
];

export const SORT_BY_WORKOUT_INDICATORS_SELECTION_OPTIONS_MOCK = [
  { id: uuidv4(), value: '🏃‍♂️/🚴‍♀️ Distance' },
  { id: uuidv4(), value: '⏱ Duration' },
  { id: uuidv4(), value: '⚡️ Speed Or Pace' },
];

export const MIN_MARKER_POP_UP_WIDTH = 250;
export const MAX_MARKER_POP_UP_WIDTH = 350;
export const ZOOM_LEVEL = 13; //default zoom level

export const INITIAL_MAP_MARKER = new L.Icon({
  iconUrl: InitialWorkoutMarker,
  iconSize: [50, 55],
  iconAnchor: [0, 60],
  popupAnchor: [26, -60],
});
