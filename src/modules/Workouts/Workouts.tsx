import React, { ReactElement, useContext, useEffect, useMemo, useState } from 'react';

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
import { LatLngBoundsExpression, LatLngExpression, LatLngTuple } from 'leaflet';
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
  const currentPosition: LatLngExpression = useMemo(
    () => [location.coordinates.lat, location.coordinates.lng],
    [location.coordinates.lat, location.coordinates.lng]
  );

  const [clickedMapCoordinates, setClickedMapCoordinates] = useState<LatLngTuple | null>(null);
  const [isFormShown, setIsFormShown] = useState(false);
  const [isFormShownOnWorkoutEdit, setIsFormShownOnWorkoutEdit] = useState(false);
  const [editableWorkoutItem, setEditableWorkoutItem] = useState<WorkoutItem | null>(null);

  const [isSubmitted, setIsSubmitted] = useState<boolean | null>(null);
  const [workoutMap, setWorkoutMap] = useState<L.Map | null>(null);

  const [groupRef, setGroupRef] = useState<L.FeatureGroup<any> | null>(null);
  const [mapRef, setMapRef] = useState<L.Map | null>(null);

  const workoutsByLastAddedItem: WorkoutItem[] = [...(workouts as WorkoutItem[])].reverse();

  useEffect(() => {
    <InitialMapMarker position={currentPosition} />;

    if (!isSubmitted) {
      setIsSubmitted(!isSubmitted);
    }
  }, [currentPosition, isSubmitted]);

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
      [SortedWorkoutsByWorkoutTypeAndIndicator.Favorite]: filter(workouts, (workout) => workout.isFavorite === true),
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

  function stopWorkoutFormPropagation(e: React.MouseEvent): void {
    e.stopPropagation();
  }

  function showWorkoutForm(): void {
    setIsFormShown(true);
  }

  function hideWorkoutForm(): void {
    setIsFormShown(false);
  }

  function getEditableWorkoutItem(editableWorkoutItem: WorkoutItem | null): void {
    if (!isFormShownOnWorkoutEdit) {
      setEditableWorkoutItem(editableWorkoutItem);
    } else {
      setEditableWorkoutItem(null);
    }
  }

  function handleShowAllWorkoutMarkers() {
    mapRef?.fitBounds(groupRef?.getBounds() as LatLngBoundsExpression);
  }

  const renderActionsPanel = (
    <>
      {workouts.length && (
        <ActionsPanel>
          <WorkoutsActionsPanel handleShowAllWorkoutMarkers={handleShowAllWorkoutMarkers} />
        </ActionsPanel>
      )}
    </>
  );

  const renderWorkoutForm = (
    <>
      {(isFormShown || isFormShownOnWorkoutEdit) && (
        <Form
          onStopPropagation={stopWorkoutFormPropagation}
          onCloseWorkoutForm={hideWorkoutForm}
          mapCoords={clickedMapCoordinates}
          isFormShownOnWorkoutEdit={setIsFormShownOnWorkoutEdit}
          editableWorkoutItem={editableWorkoutItem}
          isFormShown={isFormShown}
          setIsSubmitted={setIsSubmitted}
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
        <Workout
          key={workout.id}
          workout={workout}
          isFormShownOnWorkoutEdit={setIsFormShownOnWorkoutEdit}
          isFormShown={isFormShownOnWorkoutEdit}
          setEditableWorkoutItem={getEditableWorkoutItem}
          workoutMap={workoutMap}
        />
      ))}
    </>
  );

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures onClick={hideWorkoutForm}>
          <FeaturesTitle hasWorkouts={!!workoutsByLastAddedItem.length}>Workouts Information</FeaturesTitle>
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
            setEditableWorkoutItem={setEditableWorkoutItem}
            isSubmitted={isSubmitted}
            setWorkoutMap={setWorkoutMap}
            setGroupRef={setGroupRef}
            setMapRef={setMapRef}
          />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
