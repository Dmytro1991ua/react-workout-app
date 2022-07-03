import { AppRoutes } from '../../App.enums';
import history from '../../services/History.service';
import { toastService } from '../../services/Toast.service';
import { AppThunk } from '../../store/store';
import { UpdateUserInformation } from '../Profile/Profile.interfaces';
import { FAILED_PROFILE_UPDATE_MESSAGE, SUCCESSFUL_PROFILE_UPDATE_MESSAGE } from './Auth.constants';
import { authService } from './Auth.service';
import { setLoadingStatus, setUpdateUser } from './User.slice';

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
