import { ReactElement } from 'react';

import CustomModal from '../../../../components/CustomModal/CustomModal';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import WorkoutHeader from './components/WorkoutHeader/WorkoutHeader';
import WorkoutWeatherDetails from './components/WorkoutWeatherDetails/WorkoutWeatherDetails';
import { useWorkoutItem } from './hooks/useWorkoutItem';
import { ModalContentSubtitle, ModalContentTitle, WorkoutSection } from './Workout.styled';
import { WorkoutProps } from './Workout.types';

const Workout = ({
  workout,
  isFormShownOnWorkoutEdit,
  isFormShown,
  setEditableWorkoutItemId,
  workoutMap,
}: WorkoutProps): ReactElement => {
  const { selectedValue, distance, duration, speed, pace, cadence, elevationGain, _id } = workout;

  const {
    isDeleteConfirmationModalOpened,
    isWeatherInfoModalOpened,
    onAddToFavorites,
    onCloseDeleteConfirmationModal,
    onCloseWeatherInfoModal,
    onEditWorkout,
    onMoveToMarkerOnWorkoutClick,
    onOpenDeleteConfirmationModal,
    onOpenWeatherInfoModal,
    onRemoveWorkout,
  } = useWorkoutItem({
    isFormShown,
    workoutId: workout._id as string,
    workoutMap,
    isFormShownOnWorkoutEdit,
    setEditableWorkoutItemId,
  });

  return (
    <>
      <CustomModal
        isOpen={isDeleteConfirmationModalOpened}
        onClose={onCloseDeleteConfirmationModal}
        onSubmit={onRemoveWorkout}
        shouldCloseOnOverlayClick
        title='Workout deletion'>
        <ModalContentTitle>Are you sure you want to delete this workout?</ModalContentTitle>
        <ModalContentSubtitle>You will not be able to recover it</ModalContentSubtitle>
      </CustomModal>
      <CustomModal
        isOpen={isWeatherInfoModalOpened}
        onClose={onCloseWeatherInfoModal}
        shouldCloseOnOverlayClick
        isWeatherDetailsModal
        title='Workout weather details'>
        <WorkoutWeatherDetails workoutWeatherDetails={workout.weatherInfo} />
      </CustomModal>
      <WorkoutSection
        className={selectedValue === 'running' ? 'running' : 'cycling'}
        data-id={_id}
        onClick={onMoveToMarkerOnWorkoutClick}>
        <WorkoutHeader
          onWorkoutEdit={onEditWorkout}
          onOpenModal={onOpenDeleteConfirmationModal}
          onOpenWeatherInfoModal={onOpenWeatherInfoModal}
          workout={workout}
          onAddingToFavorites={onAddToFavorites}
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
