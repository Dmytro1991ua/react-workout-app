import { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../store/store.hooks';
import { addWorkoutToFavoritesAction, deleteWorkoutAction } from '../../../Workouts.actions';
import { selectWorkouts } from '../../../Workouts.slice';
import { WorkoutProps } from '../Workout.types';

type HookProps = Omit<WorkoutProps, 'workout'> & { workoutId: string };

type ReturnedHookType = {
  isDeleteConfirmationModalOpened: boolean;
  isWeatherInfoModalOpened: boolean;
  onMoveToMarkerOnWorkoutClick: (event: React.MouseEvent<HTMLElement>) => void;
  onRemoveWorkout: () => void;
  onEditWorkout: (id: string) => void;
  onAddToFavorites: () => void;
  onOpenDeleteConfirmationModal: () => void;
  onCloseDeleteConfirmationModal: () => void;
  onOpenWeatherInfoModal: () => void;
  onCloseWeatherInfoModal: () => void;
};

export const useWorkoutItem = ({
  workoutId,
  workoutMap,
  isFormShown,
  isFormShownOnWorkoutEdit,
  setEditableWorkoutItemId,
}: HookProps): ReturnedHookType => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const dispatch = useAppDispatch();

  const [isDeleteConfirmationModalOpened, setIsDeleteConfirmationModalOpened] = useState<boolean>(false);
  const [isWeatherInfoModalOpened, setIsWeatherInfoModalOpened] = useState<boolean>(false);

  const onMoveToMarkerOnWorkoutClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedWorkout = availableWorkouts.find(
      (workout) => workout._id === event.currentTarget.getAttribute('data-id')
    ) as WorkoutItem;

    workoutMap?.locate().on('locationfound', function () {
      workoutMap?.flyTo(clickedWorkout.coordinates, workoutMap?.getZoom(), { animate: true, duration: 1.2 });
    });
  };

  const onRemoveWorkout = useCallback((): void => {
    dispatch(deleteWorkoutAction(workoutId as string));

    setEditableWorkoutItemId(null);
    isFormShownOnWorkoutEdit(false);
  }, [dispatch, isFormShownOnWorkoutEdit, setEditableWorkoutItemId, workoutId]);

  const onEditWorkout = useCallback(
    (id: string): void => {
      isFormShownOnWorkoutEdit(!isFormShown);

      setEditableWorkoutItemId(id);
    },
    [isFormShown, isFormShownOnWorkoutEdit, setEditableWorkoutItemId]
  );

  const onAddToFavorites = useCallback((): void => {
    dispatch(addWorkoutToFavoritesAction(workoutId as string));
  }, [dispatch, workoutId]);

  const onOpenDeleteConfirmationModal = useCallback((): void => {
    setIsDeleteConfirmationModalOpened(true);
  }, []);

  const onCloseDeleteConfirmationModal = useCallback((): void => {
    setIsDeleteConfirmationModalOpened(false);
  }, []);

  const onOpenWeatherInfoModal = useCallback((): void => {
    setIsWeatherInfoModalOpened(true);
  }, []);

  const onCloseWeatherInfoModal = useCallback((): void => {
    setIsWeatherInfoModalOpened(false);
  }, []);

  return {
    isDeleteConfirmationModalOpened,
    isWeatherInfoModalOpened,
    onMoveToMarkerOnWorkoutClick,
    onRemoveWorkout,
    onEditWorkout,
    onAddToFavorites,
    onOpenDeleteConfirmationModal,
    onCloseDeleteConfirmationModal,
    onOpenWeatherInfoModal,
    onCloseWeatherInfoModal,
  };
};
