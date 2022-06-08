import { useState } from 'react';

import WorkoutHeader from './components/WorkoutHeader/WorkoutHeader';
import { ModalContentTitle, WorkoutSection, ModalContentSubtitle } from './Workout.styled';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import CustomModal from '../../../../components/CustomModal/CustomModal';
import WorkoutWeatherDetails from './components/WorkoutWeatherDetails/WorkoutWeatherDetails';
import { selectWorkouts } from '../../Workouts.slice';
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { addWorkoutToFavoritesAction, deleteWorkoutAction } from '../../Workouts.actions';

interface WorkoutProps {
  workout: WorkoutItem;
  isFormShownOnWorkoutEdit: (value: boolean) => void;
  isFormShown: boolean;
  setEditableWorkoutItemId: (id: string | null) => void;
  workoutMap: L.Map | null;
}

const Workout = ({
  workout,
  isFormShownOnWorkoutEdit,
  isFormShown,
  setEditableWorkoutItemId,
  workoutMap,
}: WorkoutProps) => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const dispatch = useAppDispatch();

  const { description, selectedValue, distance, duration, speed, pace, cadence, elevationGain, _id } = workout;

  const [isDeleteConfirmationModalOpened, setIsDeleteConfirmationModalOpened] = useState(false);
  const [isWeatherInfoModalOpened, setIsWeatherInfoModalOpened] = useState(false);

  const handleMoveToMarkerOnWorkoutClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedWorkout = availableWorkouts.find(
      (workout) => workout._id === event.currentTarget.getAttribute('data-id')
    ) as WorkoutItem;

    workoutMap?.locate().on('locationfound', function (e) {
      workoutMap?.flyTo(clickedWorkout.coordinates, workoutMap?.getZoom(), { animate: true, duration: 1.2 });
    });
  };

  // delete a particular clicked workout from UI as well as localStorage
  function handleRemoveWorkout(): void {
    dispatch(deleteWorkoutAction(_id as string));

    setEditableWorkoutItemId(null);
    isFormShownOnWorkoutEdit(false);
  }

  function handleEditWorkout(id: string): void {
    isFormShownOnWorkoutEdit(!isFormShown);

    setEditableWorkoutItemId(id);
  }

  function handleAddingToFavorites(): void {
    dispatch(addWorkoutToFavoritesAction(_id as string));
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
        title='Workout deletion'>
        <ModalContentTitle>Are you sure you want to delete this workout?</ModalContentTitle>
        <ModalContentSubtitle>You will not be able to recover it</ModalContentSubtitle>
      </CustomModal>
      <CustomModal
        isOpen={isWeatherInfoModalOpened}
        onClose={handleCloseWeatherInfoModal}
        shouldCloseOnOverlayClick
        isWeatherDetailsModal
        title='Workout weather details'>
        <WorkoutWeatherDetails workoutWeatherDetails={workout.weatherInfo} />
      </CustomModal>
      <WorkoutSection
        className={selectedValue === 'running' ? 'running' : 'cycling'}
        data-id={_id}
        onClick={handleMoveToMarkerOnWorkoutClick}>
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
