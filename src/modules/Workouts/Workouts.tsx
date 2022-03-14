import React, { ReactElement, useContext, useState } from 'react';

import { FeaturesTitle, WorkoutsFeatures, Map, WorkoutsSection, WorkoutsSectionBody } from './Workouts.styled';
import { WorkoutsContext, WorkoutsProps } from '../../context/WorkoutsContext';
import Form from './components/WorkoutForm/Form';
import Workout from './components/Workout/Workout';
import WorkoutsMap from './components/WorkoutsMap';
import FallbackMessage from './components/FallbackMessage/FallbackMessage';
import { LatLngTuple } from 'leaflet';

const Workouts = (): ReactElement => {
  // destructure certain "states" from Context
  const { workoutsData } = useContext(WorkoutsContext);

  const [workouts] = workoutsData;

  const [isFormShown, setIsFormShown] = useState(false);

  const [clickedMapCoordinates, setClickedMapCoordinates] = useState<LatLngTuple | null>(null);

  function showWorkoutForm(): void {
    setIsFormShown(true);
  }

  function hideWorkoutForm(): void {
    setIsFormShown(false);
  }

  function stopWorkoutFormPropagation(e: React.MouseEvent): void {
    e.stopPropagation();
  }

  // sort out a workouts array with object in order to display last added object to an array as a first in a list
  const sortedWorkouts = workouts.sort((obj1: any, obj2: any) => obj2.id - obj1.id);

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures onClick={hideWorkoutForm}>
          <FeaturesTitle>Workouts Information</FeaturesTitle>
          {isFormShown && (
            <Form
              onStopPropagation={stopWorkoutFormPropagation}
              onCloseWorkoutForm={hideWorkoutForm}
              mapCoords={clickedMapCoordinates}
            />
          )}
          {sortedWorkouts.length <= 0 && <FallbackMessage />}
          {sortedWorkouts.map((workout: WorkoutsProps) => (
            <Workout key={workout.id} workout={workout} />
          ))}
        </WorkoutsFeatures>
        <Map>
          <WorkoutsMap onShowWorkoutForm={showWorkoutForm} setMapCoords={setClickedMapCoordinates} />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
