import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase/app';
import { RootState } from '../../store/store';

interface User {
  currentUser: firebase.User | null;
  status: DtStatus;
}

const initialState: User = {
  currentUser: null,
  status: 'loading',
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<firebase.User | null>) => {
      state.currentUser = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.status = 'idle';
    },
  },
});

export const selectIsUserAuthenticated = (state: RootState): boolean => Boolean(state?.user?.currentUser);

export const selectUserLoading = (state: RootState): boolean => state.user.status === 'loading';

export const { setUser, clearUser } = AuthSlice.actions;

export default AuthSlice.reducer;
