import { WorkoutType } from './components/WorkoutForm/Form.interfaces';
import RunningMarker from '../../assets/images/leaflet/running-marker.png';
import CyclingMarker from '../../assets/images/leaflet/cycling-marker.png';
import L from 'leaflet';

export function workoutMarkerIcon(workoutType: WorkoutType | string) {
  const getWorkoutMarkerBasedOnWorkoutType = workoutType === 'running' ? RunningMarker : CyclingMarker;

  return new L.Icon({
    iconUrl: getWorkoutMarkerBasedOnWorkoutType,
    iconSize: [50, 55],
    iconAnchor: [0, 60],
    popupAnchor: [26, -60],
  });
}

export function kelvinToCelsius(kelvinValue: number): number {
  return Math.round(kelvinValue - 273.15);
}

export function timestampToDateString(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleTimeString();
}
