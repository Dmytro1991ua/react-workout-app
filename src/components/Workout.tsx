import { useRef, useEffect, useContext } from 'react';

import {
  RemoveBtn,
  WorkoutDetails,
  WorkoutHeader,
  WorkoutIcon,
  WorkoutSection,
  WorkoutTitle,
  WorkoutUnit,
  WorkoutValue,
} from '../styles/WorkoutStyles.styled';
import { WorkoutsContext } from '../WorkoutsContext';

const Workout = ({ workout }: any) => {
  const { workoutsData, setStorage } = useContext(WorkoutsContext);
  const [workouts, setWorkouts] = workoutsData;
  const [setLocaleStorage] = setStorage;
  const { description, selectedValue, distance, duration, speed, pace, cadence, elevationGain, id } = workout;

  const mapRef = useRef();

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
  const handleRemoveWorkout = (workout: any) => {
    const removedWorkout = workouts.filter((clickedWorkout: any) => clickedWorkout.id !== workout.id);
    setWorkouts(removedWorkout);
    setLocaleStorage(removedWorkout);
  };
  return (
    <>
      <WorkoutSection
        className={selectedValue === 'running' ? 'running' : 'cycling'}
        data-id={id}
        onClick={handleClick}
      >
        <WorkoutHeader>
          <WorkoutTitle>{description}</WorkoutTitle>
          <RemoveBtn onClick={() => handleRemoveWorkout(workout)} />
        </WorkoutHeader>
        <WorkoutDetails>
          <WorkoutIcon>{selectedValue === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</WorkoutIcon>
          <WorkoutValue>{distance}</WorkoutValue>
          <WorkoutUnit>km</WorkoutUnit>
        </WorkoutDetails>
        <WorkoutDetails>
          <WorkoutIcon>⏱</WorkoutIcon>
          <WorkoutValue>{duration}</WorkoutValue>
          <WorkoutUnit>min</WorkoutUnit>
        </WorkoutDetails>
        <WorkoutDetails>
          <WorkoutIcon>⚡️</WorkoutIcon>
          <WorkoutValue>{selectedValue === 'running' ? pace : speed}</WorkoutValue>
          <WorkoutUnit>{selectedValue === 'running' ? 'min/km' : 'km/h'}</WorkoutUnit>
        </WorkoutDetails>
        <WorkoutDetails>
          <WorkoutIcon>{selectedValue === 'running' ? '🦶🏼' : '⛰'}</WorkoutIcon>
          <WorkoutValue>{selectedValue === 'running' ? cadence : elevationGain}</WorkoutValue>
          <WorkoutUnit>{selectedValue === 'running' ? 'spm' : 'm'}</WorkoutUnit>
        </WorkoutDetails>
      </WorkoutSection>
    </>
  );
};

export default Workout;
