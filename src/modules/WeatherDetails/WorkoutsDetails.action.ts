import { toastService } from '../../services/Toast.service';
import { weatherService } from '../../services/Weather.service';
import { AppThunk } from '../../store/store';
import {
  setLoadingStatus,
  setWeatherDetailsBasedOnLocation,
  setWeatherDetailsBasedOnWorkoutCoordinates,
} from './WeatherDetails.slice';

export const loadWeatherBasedOnCurrentLocation =
  (currentLocation: CurrentLocationData): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoadingStatus('loading'));

      const currentWeatherBasedOnLocation = await weatherService.getCurrentWeather(
        currentLocation.coordinates.lat,
        currentLocation.coordinates.lng
      );

      if (currentWeatherBasedOnLocation) {
        dispatch(setWeatherDetailsBasedOnLocation(currentWeatherBasedOnLocation));
      }
    } catch (e) {
      toastService.error('Failed to get weather details for current location');
      dispatch(setWeatherDetailsBasedOnLocation(null));
    }
  };

export const loadWeatherBasedOnWorkoutCoordinates =
  (workoutCoordinates: CoordinatesEntities): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoadingStatus('loading'));

      const currentWorkoutWeather = await weatherService.getCurrentWeather(
        workoutCoordinates?.lat,
        workoutCoordinates?.lng
      );

      dispatch(setWeatherDetailsBasedOnWorkoutCoordinates(currentWorkoutWeather));
    } catch (e) {
      toastService.error('Failed to get weather details for current workout');
      dispatch(setWeatherDetailsBasedOnWorkoutCoordinates(null));
    }
  };
