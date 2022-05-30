import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LatLngTuple } from 'leaflet';
import { RootState } from '../../store/store';

interface UserState {
  currentUser: CurrentUser | null;
  status: Status;
  clickedMapCoordinates: LatLngTuple | null;
}

const initialState: UserState = {
  currentUser: null,
  status: 'loading',
  clickedMapCoordinates: null,
};

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CurrentUser | null>) => {
      state.currentUser = action.payload;
      state.status = action.payload ? 'idle' : 'failed';
    },
    setClickedMapCoordinates: (state, action: PayloadAction<LatLngTuple | null>) => {
      state.clickedMapCoordinates = action.payload;
    },
    setLoadingStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    clearUser: () => initialState,
  },
});

export const selectIsUserAuthenticated = (state: RootState): boolean => Boolean(state?.user?.currentUser);

export const selectUserLoading = (state: RootState): boolean => state.user.status === 'loading';

export const selectClickedMapCoordinates = (state: RootState): LatLngTuple | null => state.user.clickedMapCoordinates;

export const { setUser, clearUser, setClickedMapCoordinates, setLoadingStatus } = UserSlice.actions;

export default UserSlice.reducer;
