import L from 'leaflet';
import { v4 as uuidv4 } from 'uuid';

import InitialWorkoutMarker from '../../assets/images/leaflet/marker.png';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL as string;

export const WORKOUT_SUCCESS_CREATE_MESSAGE = 'Successfully created a new workout';
export const WORKOUT_SUCCESS_DELETE_MESSAGE = 'Your workout has been successfully deleted';
export const WORKOUT_SUCCESS_DELETE_ALL_MESSAGE = 'All workouts has been deleted successfully';
export const WORKOUT_SUCCESS_UPDATE_MESSAGE = 'Successfully updated workout';
export const WORKOUT_SUCCESS_ADD_TO_FAVORITE_MESSAGE = 'Successfully added to or removed workout from favorites';

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

export const WORKOUT_TYPE_SELECTION_OPTIONS = [
  { id: uuidv4(), value: 'running' },
  { id: uuidv4(), value: 'cycling' },
];

export const SORT_BY_WORKOUT_TYPE_AND_INDICATOR_SELECTION_OPTIONS: SelectedOption[] = [
  { id: uuidv4(), value: '🏃 Running' },
  { id: uuidv4(), value: '🚴‍♀️ Cycling' },
  { id: uuidv4(), value: '🧡 Favorite' },
  { id: uuidv4(), value: '🕐 Last Added' },
  { id: uuidv4(), value: '🏃‍♂️/🚴‍♀️ Distance' },
  { id: uuidv4(), value: '⏱ Duration' },
];

export const ZOOM_LEVEL = 13; //default zoom level

export const INITIAL_MAP_MARKER = new L.Icon({
  iconUrl: InitialWorkoutMarker,
  iconSize: [50, 55],
  iconAnchor: [0, 60],
  popupAnchor: [26, -60],
});

const OPEN_STREET_MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export const MAP_TILES_DETAILS_CONFIG: MapTilesConfigDetail[] = [
  {
    id: uuidv4(),
    name: 'Open StreetMap: Hot',
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution: OPEN_STREET_MAP_ATTRIBUTION,
    default: true,
  },
  {
    id: uuidv4(),
    name: 'Open Street Map: Mapnik',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: OPEN_STREET_MAP_ATTRIBUTION,
  },
  {
    id: uuidv4(),
    name: 'Open Street Map: France',
    url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    attribution: OPEN_STREET_MAP_ATTRIBUTION,
  },
  {
    id: uuidv4(),
    name: 'Open StreetMap: DE',
    url: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
    attribution: OPEN_STREET_MAP_ATTRIBUTION,
    maxZoom: 18,
  },
  {
    id: uuidv4(),
    name: 'Stadia Alidade Smooth Dark',
    url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 20,
  },
  {
    id: uuidv4(),
    name: 'Open Topo Map',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    maxZoom: 17,
  },
  {
    id: uuidv4(),
    name: 'OPNVKarte',
    url: 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
    attribution:
      'Map <a href="https://memomaps.de/">memomaps.de</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  },
  {
    id: uuidv4(),
    name: 'Esri World Street Map',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
  },
  {
    id: uuidv4(),
    name: 'Stadia OSMBright',
    url: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 20,
  },
];

export const WARNING_POPUP_CONTENT = JSON.stringify({
  title: 'Are you sure you want to leave this page?',
  subtitle: 'Your changes will be lost',
});
