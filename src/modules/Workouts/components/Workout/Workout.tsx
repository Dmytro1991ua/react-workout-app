import { useRef, useEffect, useContext } from 'react';

import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import { WorkoutsProps } from './../../../../context/WorkoutsContext';
import { toastService } from './../../../../services/Toast.service';
import WorkoutHeader from './components/WorkoutHeader/WorkoutHeader';
import { WorkoutSection } from './Workout.styled';
import WorkoutDetails from './components/WorkoutDetails/WorkoutDetails';

interface WorkoutProps {
  workout: WorkoutsProps;
}

const Workout = ({ workout }: WorkoutProps) => {
  const { workoutsData, setStorage } = useContext(WorkoutsContext);
  const [workouts, setWorkouts] = workoutsData;

  const { description, selectedValue, distance, duration, speed, pace, cadence, elevationGain, id } = workout;

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
  const handleRemoveWorkout = () => {
    const removedWorkout = workouts.filter((clickedWorkout: WorkoutsProps) => clickedWorkout.id !== workout.id);

    setWorkouts(removedWorkout);
  };

  const handleEditWorkout = () => {
    return toastService.info('Not implemented yet');
  };

  return (
    <WorkoutSection className={selectedValue === 'running' ? 'running' : 'cycling'} data-id={id} onClick={handleClick}>
      <WorkoutHeader
        description={description}
        onWorkoutEdit={handleEditWorkout}
        onWorkoutDelete={handleRemoveWorkout}
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
  );
};

export default Workout;
