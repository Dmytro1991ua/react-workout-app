import { WorkoutFormInitialValues, WorkoutType } from './components/WorkoutForm/Form.interfaces';
import L, { LatLngTuple } from 'leaflet';

import RunningMarker from '../../assets/images/leaflet/running-marker.png';
import CyclingMarker from '../../assets/images/leaflet/cycling-marker.png';
import { MONTHS_LIST } from './Workouts.constants';
import { store } from '../../store/store';
import { createNewWorkoutAction } from './Workouts.actions';

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

// calculate running pace
export const runningPace = (duration: number, distance: number): number => {
  return Number((duration / distance).toFixed(1));
};

//calculate cycling speed
export const cyclingSpeed = (duration: number, distance: number): number => {
  return Number((distance / (duration / 60)).toFixed(1));
};

// create a workout description based on a type of workout and current date
export const workoutDescription = (workoutType: string, distance: number) => {
  return `${workoutType[0].toUpperCase()}${workoutType?.slice(1)} ${distance} km on ${
    MONTHS_LIST[new Date().getMonth()]
  } ${new Date().getDate()} at ${new Date().toLocaleTimeString()}`;
};

// create a workout data from form inputs based on selected workout (either Running or Cycling)
export function createWorkoutItem(
  formData: WorkoutFormInitialValues,
  mapCoords: LatLngTuple,
  weatherBasedOnWorkoutCoordinates: CurrentWeatherData | null
): void {
  const workoutData: WorkoutItem = {
    date: new Date().toLocaleDateString(),
    coordinates: mapCoords,
    selectedValue: formData?.workoutType ?? '',
    distance: formData?.distance as number,
    duration: formData?.duration as number,
    isFavorite: false,
    weatherInfo: weatherBasedOnWorkoutCoordinates as CurrentWeatherData,
  };

  if (formData?.workoutType === 'running') {
    store.dispatch(
      createNewWorkoutAction({
        ...workoutData,
        cadence: formData.cadence,
        pace: runningPace(formData.duration as number, formData.distance as number),
        description: workoutDescription(formData.workoutType, formData.distance as number),
      })
    );
  }

  if (formData?.workoutType === 'cycling') {
    store.dispatch(
      createNewWorkoutAction({
        ...workoutData,
        elevationGain: formData?.elevationGain,
        speed: cyclingSpeed(formData?.duration as number, formData?.distance as number),
        description: workoutDescription(formData?.workoutType as WorkoutType, formData?.distance as number),
      })
    );
  }
}
