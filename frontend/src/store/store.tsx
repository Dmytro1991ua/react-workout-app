import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';

import UserReducer from '../modules/Auth/User.slice';
import WeatherDetailsReducer from '../modules/WeatherDetails/WeatherDetails.slice';
import WorkoutsReducer from '../modules/Workouts/Workouts.slice';
import WorkoutsQuizQuestions from '../modules/WorkoutsQuiz/WorkoutsQuiz.slice';

const { createLogger } = require('redux-logger');

const reduxLogger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    user: UserReducer,
    workouts: WorkoutsReducer,
    weatherDetails: WeatherDetailsReducer,
    workoutsQuizQuestions: WorkoutsQuizQuestions,
  },
  middleware(getDefaultMiddleware) {
    if (process.env.NODE_ENV === 'development') {
      return getDefaultMiddleware({
        serializableCheck: false,
        thunk: true,
        immutableCheck: true,
      }).concat(reduxLogger);
    }
    return getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
      immutableCheck: true,
    });
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
