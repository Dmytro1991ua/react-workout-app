import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from '../modules/Auth/Auth.slice';

const { createLogger } = require('redux-logger');

const reduxLogger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    user: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: true, immutableCheck: true }).concat(reduxLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
