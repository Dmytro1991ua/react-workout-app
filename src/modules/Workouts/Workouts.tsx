import React, { ReactElement, useContext, useEffect, useState } from 'react';

import {
  FeaturesTitle,
  WorkoutsFeatures,
  Map,
  WorkoutsSection,
  WorkoutsSectionBody,
  ActionsPanel,
} from './Workouts.styled';
import { WorkoutsContext } from '../../context/WorkoutsContext';
import Form from './components/WorkoutForm/Form';
import Workout from './components/Workout/Workout';
import WorkoutsMap from './components/WorkoutsMap';
import FallbackMessage from './components/FallbackMessage/FallbackMessage';
import { LatLngExpression, LatLngTuple } from 'leaflet';
import useGeolocation from '../../hooks/useGeolocation';
import InitialMapMarker from './components/MapMarker/InitialMapMarker';
import { WorkoutsActionsPanel } from './components/WorkoutsActionsPanel/WorkoutsActionsPanel';
import { SortedWorkoutsByWorkoutTypeAndIndicator } from './Workouts.enums';
import { filter, sortBy } from 'lodash';

const Workouts = (): ReactElement => {
  // destructure certain "states" from Context
  const { workoutsData, selectedWorkoutTypeValueAndIndicator } = useContext(WorkoutsContext);
  const [workouts] = workoutsData;
  const [sortedByWorkoutTypeValueAndIndicator] = selectedWorkoutTypeValueAndIndicator;

  const location = useGeolocation();
  const currentPosition: LatLngExpression = [location.coordinates.lat, location.coordinates.lng];

  const [isFormShown, setIsFormShown] = useState(false);

  const [clickedMapCoordinates, setClickedMapCoordinates] = useState<LatLngTuple | null>(null);

  const workoutsByLastAddedItem = [...workouts].reverse();

  useEffect(() => {
    <InitialMapMarker position={currentPosition} />;
  }, []);

  const SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR: Record<SortedWorkoutsByWorkoutTypeAndIndicator, WorkoutItem[]> =
    {
      [SortedWorkoutsByWorkoutTypeAndIndicator.Default]: workoutsByLastAddedItem,
      [SortedWorkoutsByWorkoutTypeAndIndicator.LastAdded]: sortBy(workouts, 'description', 'desc'),
      [SortedWorkoutsByWorkoutTypeAndIndicator.Running]: filter(
        workouts,
        (workout) => workout.selectedValue === 'running'
      ),
      [SortedWorkoutsByWorkoutTypeAndIndicator.Cycling]: filter(
        workouts,
        (workout) => workout.selectedValue === 'cycling'
      ),
      [SortedWorkoutsByWorkoutTypeAndIndicator.Favorite]: [],
      [SortedWorkoutsByWorkoutTypeAndIndicator.Distance]: sortBy(workouts, 'distance', 'desc'),
      [SortedWorkoutsByWorkoutTypeAndIndicator.Duration]: sortBy(workouts, 'duration', 'desc'),
    };

  const getWorkoutsByWorkoutType =
    SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR[
      sortedByWorkoutTypeValueAndIndicator as SortedWorkoutsByWorkoutTypeAndIndicator
    ];

  const hasFavoritesWorkouts =
    sortedByWorkoutTypeValueAndIndicator === SortedWorkoutsByWorkoutTypeAndIndicator.Favorite &&
    !SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR[SortedWorkoutsByWorkoutTypeAndIndicator.Favorite].length;

  const getDefaultOrSortedWorkouts: WorkoutItem[] = sortedByWorkoutTypeValueAndIndicator
    ? getWorkoutsByWorkoutType
    : workoutsByLastAddedItem;

  function showWorkoutForm(): void {
    setIsFormShown(true);
  }

  function hideWorkoutForm(): void {
    setIsFormShown(false);
  }

  function stopWorkoutFormPropagation(e: React.MouseEvent): void {
    e.stopPropagation();
  }

  const renderActionsPanel = (
    <>
      {workouts.length && (
        <ActionsPanel>
          <WorkoutsActionsPanel />
        </ActionsPanel>
      )}
    </>
  );

  const renderWorkoutForm = (
    <>
      {isFormShown && (
        <Form
          onStopPropagation={stopWorkoutFormPropagation}
          onCloseWorkoutForm={hideWorkoutForm}
          mapCoords={clickedMapCoordinates}
        />
      )}
    </>
  );

  const renderFallbackMessageWhenNoWorkout = (
    <>
      {!workouts.length && (
        <FallbackMessage
          message=' 🏁 To save a new workout just click on the map and fill-out the details on the form'
          title='You have no available workouts'
        />
      )}
      {hasFavoritesWorkouts && (
        <FallbackMessage
          message=' 🧡 To add a particular workout to favorite just click on a heart icon on a specific workout and keep track on your favorites later on'
          title='You have no available favorite workouts'
        />
      )}
    </>
  );

  const renderAvailableWorkouts = (
    <>
      {getDefaultOrSortedWorkouts.map((workout: WorkoutItem) => (
        <Workout key={workout.id} workout={workout} />
      ))}
    </>
  );

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures onClick={hideWorkoutForm}>
          <FeaturesTitle hasWorkouts={!!workouts.length}>Workouts Information</FeaturesTitle>
          {renderActionsPanel}
          {renderWorkoutForm}
          {renderFallbackMessageWhenNoWorkout}
          {renderAvailableWorkouts}
        </WorkoutsFeatures>
        <Map>
          <WorkoutsMap
            onShowWorkoutForm={showWorkoutForm}
            setMapCoords={setClickedMapCoordinates}
            isFormShown={isFormShown}
            workouts={getDefaultOrSortedWorkouts}
          />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
