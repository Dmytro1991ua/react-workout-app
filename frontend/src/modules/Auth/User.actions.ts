import { AppRoutes } from '../../App.enums';
import history from '../../services/History.service';
import { toastService } from '../../services/Toast.service';
import { AppThunk } from '../../store/store';
import { UpdateUserInformation } from '../Profile/Profile.interfaces';
import { FAILED_PROFILE_UPDATE_MESSAGE, SUCCESSFUL_PROFILE_UPDATE_MESSAGE } from './Auth.constants';
import { authService } from './Auth.service';
import { setLoadingStatus, setUpdateUser, setUser } from './User.slice';

export const validateUserAction =
  (firebaseProvider: string[]): AppThunk =>
  async (dispatch) => {
    try {
      const validatedUser = await authService.validateUser();

      if (validatedUser) {
        dispatch(
          setUser({
            uid: validatedUser?.uid,
            name: validatedUser?.name,
            email: validatedUser?.email,
            photoURL: validatedUser?.photoURL,
            phoneNumber: validatedUser?.phoneNumber,
            emailVerified: validatedUser?.emailVerified,
            firebaseProvider,
          })
        );
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
      throw new Error((error as Error).message);
    }
  };

export const updateUserDataAction =
  (userData: UpdateUserInformation): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoadingStatus('loading'));

      const updatedUserData = await authService.updateUserData(userData);

      if (updatedUserData) {
        dispatch(setUpdateUser(updatedUserData));
      }

      history.push(AppRoutes.Home);
      toastService.success(SUCCESSFUL_PROFILE_UPDATE_MESSAGE);
    } catch (err) {
      dispatch(setLoadingStatus('failed'));
      toastService.error(FAILED_PROFILE_UPDATE_MESSAGE);
    }
  };
