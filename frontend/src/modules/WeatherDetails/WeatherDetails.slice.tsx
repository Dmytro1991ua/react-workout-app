import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../store/store';

interface WeatherDetailsState {
  workoutWeather: CurrentWeatherData | null;
  weatherDetailsBasedOnLocation: CurrentWeatherData | null;
  status: Status;
}

const initialState: WeatherDetailsState = {
  weatherDetailsBasedOnLocation: null,
  workoutWeather: null,
  status: 'loading',
};

export const WeatherDetailsSlice = createSlice({
  name: 'weatherDetails',
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    setWeatherDetailsBasedOnLocation: (state, action: PayloadAction<CurrentWeatherData | null>) => {
      state.weatherDetailsBasedOnLocation = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setWeatherDetailsBasedOnWorkoutCoordinates: (state, action: PayloadAction<CurrentWeatherData | null>) => {
      state.workoutWeather = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    clearWeatherDetails: () => initialState,
  },
});

export const selectWeatherDetailsBasedOnLocation = (state: RootState): CurrentWeatherData | null =>
  state.weatherDetails.weatherDetailsBasedOnLocation;
export const selectWeatherDetailsBasedWorkoutCoordinates = (state: RootState): CurrentWeatherData | null =>
  state.weatherDetails.workoutWeather;

export const {
  clearWeatherDetails,
  setLoadingStatus,
  setWeatherDetailsBasedOnLocation,
  setWeatherDetailsBasedOnWorkoutCoordinates,
} = WeatherDetailsSlice.actions;

export default WeatherDetailsSlice.reducer;
