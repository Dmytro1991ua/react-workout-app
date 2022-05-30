import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  FeaturesTitle,
  WorkoutsFeatures,
  Map,
  WorkoutsSection,
  WorkoutsSectionBody,
  ActionsPanel,
} from './Workouts.styled';
import Form from './components/WorkoutForm/Form';
import Workout from './components/Workout/Workout';
import WorkoutsMap from './components/WorkoutsMap';
import FallbackMessage from './components/FallbackMessage/FallbackMessage';
import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import useGeolocation from '../../hooks/useGeolocation';
import InitialMapMarker from './components/MapMarker/InitialMapMarker';
import { WorkoutsActionsPanel } from './components/Workout/components/WorkoutsActionsPanel/WorkoutsActionsPanel';
import { SortedWorkoutsSelectOption } from './Workouts.enums';
import { filter, sortBy } from 'lodash';
import { selectSortedWorkoutsSelectOption, selectWorkouts } from './Workouts.slice';
import { useAppSelector } from '../../store/store.hooks';
import { selectClickedMapCoordinates } from '../Auth/User.slice';

const Workouts = (): ReactElement => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const mapCoordinates = useAppSelector(selectClickedMapCoordinates);
  const sortedWorkoutsSelectOption = useAppSelector(selectSortedWorkoutsSelectOption);

  const location = useGeolocation();
  const currentPosition: LatLngExpression = useMemo(
    () => [location.coordinates.lat, location.coordinates.lng],
    [location.coordinates.lat, location.coordinates.lng]
  );

  const [isFormShown, setIsFormShown] = useState(false);
  const [isFormShownOnWorkoutEdit, setIsFormShownOnWorkoutEdit] = useState(false);
  const [editableWorkoutItem, setEditableWorkoutItem] = useState<WorkoutItem | null>(null);

  const [isSubmitted, setIsSubmitted] = useState<boolean | null>(null);
  const [workoutMap, setWorkoutMap] = useState<L.Map | null>(null);

  const [groupRef, setGroupRef] = useState<L.FeatureGroup<any> | null>(null);
  const [mapRef, setMapRef] = useState<L.Map | null>(null);

  const workoutsByLastAddedItem = [...availableWorkouts].reverse();

  useEffect(() => {
    <InitialMapMarker position={currentPosition} />;

    if (!isSubmitted) {
      setIsSubmitted(!isSubmitted);
    }
  }, [currentPosition, isSubmitted]);

  const SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR: Record<SortedWorkoutsSelectOption, WorkoutItem[]> = {
    [SortedWorkoutsSelectOption.Default]: workoutsByLastAddedItem,
    [SortedWorkoutsSelectOption.LastAdded]: sortBy(availableWorkouts, 'description', 'desc'),
    [SortedWorkoutsSelectOption.Running]: filter(availableWorkouts, (workout) => workout.selectedValue === 'running'),
    [SortedWorkoutsSelectOption.Cycling]: filter(availableWorkouts, (workout) => workout.selectedValue === 'cycling'),
    [SortedWorkoutsSelectOption.Favorite]: filter(availableWorkouts, (workout) => workout.isFavorite === true),
    [SortedWorkoutsSelectOption.Distance]: sortBy(availableWorkouts, 'distance', 'desc'),
    [SortedWorkoutsSelectOption.Duration]: sortBy(availableWorkouts, 'duration', 'desc'),
  };

  const WORKOUT_FALLBACK_MESSAGE_CONFIG: WorkoutFallbackMessage[] = [
    {
      id: uuidv4(),
      message: '🏁 To save a new workout just click on the map and fill-out the details on the form',
      title: 'You have no available workouts',
      hasWorkouts: !availableWorkouts.length,
    },
    {
      id: uuidv4(),
      message: '🏃 To save a new running workout just click on the map and fill-out the details on the form',
      title: 'You have no available running workouts',
      hasWorkouts:
        sortedWorkoutsSelectOption === SortedWorkoutsSelectOption.Running &&
        !SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR[SortedWorkoutsSelectOption.Running].length,
    },
    {
      id: uuidv4(),
      message: '🚴‍♀️ To save a new cycling workout just click on the map and fill-out the details on the form',
      title: 'You have no available cycling workouts',
      hasWorkouts:
        sortedWorkoutsSelectOption === SortedWorkoutsSelectOption.Cycling &&
        !SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR[SortedWorkoutsSelectOption.Cycling].length,
    },
    {
      id: uuidv4(),
      message:
        '🧡 To add a particular workout to favorite just click on a heart icon on a specific workout and keep track on your favorites later on',
      title: 'You have no available favorite workouts',
      hasWorkouts:
        sortedWorkoutsSelectOption === SortedWorkoutsSelectOption.Favorite &&
        !SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR[SortedWorkoutsSelectOption.Favorite].length,
    },
  ];

  const getWorkoutsByWorkoutType =
    SORTED_WORKOUTS_BY_WORKOUT_TYPE_AND_INDICATOR[sortedWorkoutsSelectOption as SortedWorkoutsSelectOption];

  const getDefaultOrSortedWorkouts: WorkoutItem[] = sortedWorkoutsSelectOption
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
      {availableWorkouts.length && (
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
          mapCoords={mapCoordinates}
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
      {WORKOUT_FALLBACK_MESSAGE_CONFIG.map((message) => {
        return (
          message.hasWorkouts && <FallbackMessage message={message.message} title={message.title} key={message.id} />
        );
      })}
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
