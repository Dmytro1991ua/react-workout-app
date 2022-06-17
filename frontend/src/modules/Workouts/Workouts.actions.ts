import { toastService } from '../../services/Toast.service';
import { AppThunk } from '../../store/store';
import {
  WORKOUT_SUCCESS_ADD_TO_FAVORITE_MESSAGE,
  WORKOUT_SUCCESS_CREATE_MESSAGE,
  WORKOUT_SUCCESS_DELETE_ALL_MESSAGE,
  WORKOUT_SUCCESS_DELETE_MESSAGE,
  WORKOUT_SUCCESS_UPDATE_MESSAGE,
} from './Workouts.constants';
import { workoutService } from './Workouts.service';
import {
  setAddWorkoutToFavorites,
  setCreateWorkout,
  setDeleteAllWorkouts,
  setDeleteWorkout,
  setLoadingStatus,
  setUpdateWorkout,
  setWorkouts,
} from './Workouts.slice';

export const loadAvailableWorkoutsAction = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoadingStatus('loading'));

    const workouts = await workoutService.getAvailableWorkouts();

    dispatch(setWorkouts(workouts));
  } catch (err) {
    dispatch(setLoadingStatus('failed'));
    toastService.error('Failed to load workouts');
    return dispatch(setWorkouts([]));
  }
};

export const createNewWorkoutAction =
  (workoutData: WorkoutItem): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoadingStatus('loading'));

      const workout = await workoutService.createNewWorkout(workoutData);

      if (workout) {
        dispatch(setCreateWorkout(workout));
      }

      toastService.success(WORKOUT_SUCCESS_CREATE_MESSAGE);
    } catch (err) {
      dispatch(setLoadingStatus('failed'));
      toastService.error('Failed to create a workout');
    }
  };

export const updateWorkoutAction =
  (id: string, workoutData: WorkoutItem): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoadingStatus('loading'));

      const updatedWorkout = await workoutService.updateWorkout(id, workoutData);

      if (updatedWorkout) {
        dispatch(setUpdateWorkout(updatedWorkout));
      }

      toastService.success(WORKOUT_SUCCESS_UPDATE_MESSAGE);
    } catch (err) {
      dispatch(setLoadingStatus('failed'));
      toastService.error('Failed to update a workout');
    }
  };

export const deleteWorkoutAction =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setLoadingStatus('loading'));

      const deletedWorkout = await workoutService.deleteWorkout(id);

      if (deletedWorkout) {
        dispatch(setDeleteWorkout(deletedWorkout));
      }

      toastService.success(WORKOUT_SUCCESS_DELETE_MESSAGE);
    } catch (err) {
      dispatch(setLoadingStatus('failed'));
      toastService.error('Failed to delete a workout');
    }
  };

export const deleteAllWorkoutsAction = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoadingStatus('loading'));

    const deleteAllWorkouts = await workoutService.deleteAllWorkouts();

    if (deleteAllWorkouts) {
      dispatch(setDeleteAllWorkouts());
    }

    toastService.success(WORKOUT_SUCCESS_DELETE_ALL_MESSAGE);
  } catch (err) {
    dispatch(setLoadingStatus('failed'));
    toastService.error('Failed to delete all workouts');
  }
};

export const addWorkoutToFavoritesAction =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      const updatedWorkout = await workoutService.addWorkoutToFavorites(id);

      if (updatedWorkout) {
        dispatch(setAddWorkoutToFavorites(updatedWorkout));
      }

      toastService.success(WORKOUT_SUCCESS_ADD_TO_FAVORITE_MESSAGE);
    } catch (err) {
      dispatch(setLoadingStatus('failed'));
      toastService.error('Failed add workout to favorites');
    }
  };
