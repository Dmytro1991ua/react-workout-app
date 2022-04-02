import React, { ReactElement, useContext, useEffect, useState } from 'react';

import {
  FeaturesTitle,
  WorkoutsFeatures,
  Map,
  WorkoutsSection,
  WorkoutsSectionBody,
  ActionsPanel,
} from './Workouts.styled';
import { WorkoutsContext, WorkoutsProps } from '../../context/WorkoutsContext';
import Form from './components/WorkoutForm/Form';
import Workout from './components/Workout/Workout';
import WorkoutsMap from './components/WorkoutsMap';
import FallbackMessage from './components/FallbackMessage/FallbackMessage';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import useGeolocation from '../../hooks/useGeolocation';
import InitialMapMarker from './components/MapMarker/InitialMapMarker';
import { WorkoutsActionsPanel } from './components/WorkoutsActionsPanel/WorkoutsActionsPanel';

const Workouts = (): ReactElement => {
  // destructure certain "states" from Context
  const { workoutsData } = useContext(WorkoutsContext);
  const [workouts] = workoutsData;

  const location = useGeolocation();
  const currentPosition: LatLngExpression = [location.coordinates.lat, location.coordinates.lng];

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

  useEffect(() => {
    <InitialMapMarker position={currentPosition} />;
  }, []);

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures onClick={hideWorkoutForm}>
          <FeaturesTitle hasWorkouts={!!workouts.length}>Workouts Information</FeaturesTitle>
          {workouts.length && (
            <ActionsPanel>
              <WorkoutsActionsPanel />
            </ActionsPanel>
          )}
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
          <WorkoutsMap
            onShowWorkoutForm={showWorkoutForm}
            setMapCoords={setClickedMapCoordinates}
            isFormShown={isFormShown}
          />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
