import { configureStore, combineReducers, ThunkAction, AnyAction } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from '../modules/Auth/User.slice';
import WorkoutsReducer from '../modules/Workouts/Workouts.slice';
import WeatherDetailsReducer from '../modules/WeatherDetails/WeatherDetails.slice';

const rootReducer = combineReducers({
  user: UserReducer,
  workouts: WorkoutsReducer,
  weatherDetails: WeatherDetailsReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['workouts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const { createLogger } = require('redux-logger');

const reduxLogger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
      immutableCheck: true,
    }).concat(reduxLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
