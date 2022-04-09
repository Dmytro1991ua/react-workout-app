import { useEffect, useContext, useState } from 'react';

import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { toastService } from './../../../../services/Toast.service';
import WorkoutHeader from './components/WorkoutHeader/WorkoutHeader';
import { ModalContentTitle, WorkoutSection, ModalContentSubtitle } from './Workout.styled';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';
import CustomModal from '../../../../components/CustomModal/CustomModal';
import { WORKOUT_SUCCESS_DELETE_MESSAGE } from '../../Workouts.constants';

interface WorkoutProps {
  workout: WorkoutItem;
}

const Workout = ({ workout }: WorkoutProps) => {
  const { workoutsData, setStorage } = useContext(WorkoutsContext);
  const [workouts, setWorkouts] = workoutsData;

  const { description, selectedValue, distance, duration, speed, pace, cadence, elevationGain, id } = workout;

  const [isDeleteConfirmationModalOpened, setIsDeleteConfirmationModalOpened] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const clickedWorkout = workouts.find((workout: any) => workout.id === event.currentTarget.getAttribute('data-id'));

    // map.setView(clickedWorkout.coordinates, 13, {
    //   animate: true,
    //   pan: {
    //     duration: 1,
    //   },
    // });
  };

  useEffect(() => {
    // set the initialized map to the ref
    // mapRef.current = L.map("map").flyTo(clickedWorkout.coordinates, 13, {
    //   animate: true,
    //   pan: {
    //     duration: 1,
    //   },
    // });
  }, []);

  // delete a particular clicked workout from UI as well as localStorage
  function handleRemoveWorkout(): void {
    const removedWorkout = workouts.filter((clickedWorkout: WorkoutItem) => clickedWorkout.id !== workout.id);

    setWorkouts(removedWorkout);

    toastService.success(WORKOUT_SUCCESS_DELETE_MESSAGE);
  }

  function handleEditWorkout(): void {
    return toastService.info('Not implemented yet');
  }

  function handleOpenDeleteConfirmationModal(): void {
    setIsDeleteConfirmationModalOpened(true);
  }

  function handleCloseDeleteConfirmationModal(): void {
    setIsDeleteConfirmationModalOpened(false);
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
      <WorkoutSection
        className={selectedValue === 'running' ? 'running' : 'cycling'}
        data-id={id}
        onClick={handleClick}
      >
        <WorkoutHeader
          description={description}
          onWorkoutEdit={handleEditWorkout}
          onOpenModal={handleOpenDeleteConfirmationModal}
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
