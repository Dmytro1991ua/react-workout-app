import { useState } from 'react';

import { toastService } from './../../../../services/Toast.service';
import WorkoutHeader from './components/WorkoutHeader/WorkoutHeader';
import { ModalContentTitle, WorkoutSection, ModalContentSubtitle } from './Workout.styled';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import CustomModal from '../../../../components/CustomModal/CustomModal';
import { WORKOUT_SUCCESS_DELETE_MESSAGE } from '../../Workouts.constants';
import WorkoutWeatherDetails from './components/WorkoutWeatherDetails/WorkoutWeatherDetails';
import { selectWorkouts, setAddWorkoutToFavorites, setWorkouts } from '../../Workouts.slice';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';

interface WorkoutProps {
  workout: WorkoutItem;
  isFormShownOnWorkoutEdit: (value: boolean) => void;
  isFormShown: boolean;
  setEditableWorkoutItem: (editableWorkout: WorkoutItem | null) => void;
  workoutMap: L.Map | null;
}

const Workout = ({
  workout,
  isFormShownOnWorkoutEdit,
  isFormShown,
  setEditableWorkoutItem,
  workoutMap,
}: WorkoutProps) => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const dispatch = useAppDispatch();

  const { description, selectedValue, distance, duration, speed, pace, cadence, elevationGain, id } = workout;

  const [isDeleteConfirmationModalOpened, setIsDeleteConfirmationModalOpened] = useState(false);
  const [isWeatherInfoModalOpened, setIsWeatherInfoModalOpened] = useState(false);

  const handleMoveToMarkerOnWorkoutClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedWorkout = availableWorkouts.find(
      (workout) => workout.id === event.currentTarget.getAttribute('data-id')
    ) as WorkoutItem;

    workoutMap?.locate().on('locationfound', function (e) {
      workoutMap?.flyTo(clickedWorkout.coordinates, workoutMap?.getZoom(), { animate: true, duration: 0.5 });
    });
  };

  // delete a particular clicked workout from UI as well as localStorage
  function handleRemoveWorkout(): void {
    const removedWorkout = availableWorkouts.filter((clickedWorkout: WorkoutItem) => clickedWorkout.id !== workout.id);

    dispatch(setWorkouts(removedWorkout));

    setEditableWorkoutItem(null);
    isFormShownOnWorkoutEdit(false);

    toastService.success(WORKOUT_SUCCESS_DELETE_MESSAGE);
  }

  function handleEditWorkout(id: string): void {
    isFormShownOnWorkoutEdit(!isFormShown);

    const editableWorkout = availableWorkouts.find((workout) => workout.id === id) ?? null;

    setEditableWorkoutItem(editableWorkout);
  }

  function handleAddingToFavorites(): void {
    dispatch(setAddWorkoutToFavorites({ id: workout.id, isFavorite: !workout.isFavorite }));
  }

  function handleOpenDeleteConfirmationModal(): void {
    setIsDeleteConfirmationModalOpened(true);
  }

  function handleCloseDeleteConfirmationModal(): void {
    setIsDeleteConfirmationModalOpened(false);
  }

  function handleOpenWeatherInfoModal(): void {
    setIsWeatherInfoModalOpened(true);
  }

  function handleCloseWeatherInfoModal(): void {
    setIsWeatherInfoModalOpened(false);
  }

  return (
    <>
      <CustomModal
        isOpen={isDeleteConfirmationModalOpened}
        onClose={handleCloseDeleteConfirmationModal}
        onSubmit={handleRemoveWorkout}
        shouldCloseOnOverlayClick
        title='Workout deletion'
      >
        <ModalContentTitle>Are you sure you want to delete this workout?</ModalContentTitle>
        <ModalContentSubtitle>You will not be able to recover it</ModalContentSubtitle>
      </CustomModal>
      <CustomModal
        isOpen={isWeatherInfoModalOpened}
        onClose={handleCloseWeatherInfoModal}
        shouldCloseOnOverlayClick
        isWeatherDetailsModal
        title='Workout weather details'
      >
        <WorkoutWeatherDetails workoutWeatherDetails={workout.weatherInfo} />
      </CustomModal>
      <WorkoutSection
        className={selectedValue === 'running' ? 'running' : 'cycling'}
        data-id={id}
        onClick={handleMoveToMarkerOnWorkoutClick}
      >
        <WorkoutHeader
          description={description}
          onWorkoutEdit={handleEditWorkout}
          onOpenModal={handleOpenDeleteConfirmationModal}
          onOpenWeatherInfoModal={handleOpenWeatherInfoModal}
          workout={workout}
          onAddingToFavorites={handleAddingToFavorites}
        />
        <WorkoutDetails
          selectedValue={selectedValue}
          distance={distance}
          duration={duration}
          cadence={cadence}
          elevationGain={elevationGain}
          pace={pace}
          speed={speed}
        />
      </WorkoutSection>
    </>
  );
};

export default Workout;
