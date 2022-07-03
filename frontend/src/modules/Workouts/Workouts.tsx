import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { filter, reverse, sortBy } from 'lodash';
import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { v4 as uuidv4 } from 'uuid';

import useGeolocation from '../../cdk/hooks/useGeolocation';
import { colors } from '../../global-styles/ColorsPalette';
import { useAppSelector } from '../../store/store.hooks';
import { selectClickedMapCoordinates } from '../Auth/User.slice';
import FallbackMessage from './components/FallbackMessage/FallbackMessage';
import InitialMapMarker from './components/MapMarker/InitialMapMarker';
import { WorkoutsActionsPanel } from './components/Workout/components/WorkoutsActionsPanel/WorkoutsActionsPanel';
import Workout from './components/Workout/Workout';
import Form from './components/WorkoutForm/Form';
import WorkoutsMap from './components/WorkoutsMap';
import { SortedWorkoutsSelectOption } from './Workouts.enums';
import { selectAreWorkoutsLoading, selectSortedWorkoutsSelectOption, selectWorkouts } from './Workouts.slice';
import {
  ActionsPanel,
  FeaturesTitle,
  LoaderWrapper,
  Map,
  WorkoutsFeatures,
  WorkoutsSection,
  WorkoutsSectionBody,
} from './Workouts.styled';

const Workouts = (): ReactElement => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const mapCoordinates = useAppSelector(selectClickedMapCoordinates);
  const sortedWorkoutsSelectOption = useAppSelector(selectSortedWorkoutsSelectOption);
  const isLoading = useAppSelector(selectAreWorkoutsLoading);

  const location = useGeolocation();
  const currentPosition: LatLngExpression = useMemo(
    () => [location.coordinates.lat, location.coordinates.lng],
    [location.coordinates.lat, location.coordinates.lng]
  );

  const [isFormShown, setIsFormShown] = useState(false);
  const [isFormShownOnWorkoutEdit, setIsFormShownOnWorkoutEdit] = useState(false);

  const [editableWorkoutItemId, setEditableWorkoutItemId] = useState<string | null>(null);

  const [isSubmitted, setIsSubmitted] = useState<boolean | null>(null);
  const [workoutMap, setWorkoutMap] = useState<L.Map | null>(null);

  const [groupRef, setGroupRef] = useState<L.FeatureGroup<any> | null>(null);
  const [mapRef, setMapRef] = useState<L.Map | null>(null);

  const workoutsByLastAddedItem = reverse([...availableWorkouts]);

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

  function getEditableWorkoutItemId(id: string | null): void {
    if (isFormShownOnWorkoutEdit) {
      setEditableWorkoutItemId(null);
    } else {
      setEditableWorkoutItemId(id);
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
          editableWorkoutItemId={editableWorkoutItemId}
          isFormShown={isFormShown}
          setIsSubmitted={setIsSubmitted}
          setEditableWorkoutItemId={setEditableWorkoutItemId}
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
      {isLoading ? (
        <LoaderWrapper>
          <Bars color={colors.mantis} height={100} width={100} />
        </LoaderWrapper>
      ) : (
        getDefaultOrSortedWorkouts.map((workout: WorkoutItem) => (
          <Workout
            key={workout._id}
            workout={workout}
            isFormShownOnWorkoutEdit={setIsFormShownOnWorkoutEdit}
            isFormShown={isFormShownOnWorkoutEdit}
            setEditableWorkoutItemId={getEditableWorkoutItemId}
            workoutMap={workoutMap}
          />
        ))
      )}
    </>
  );

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures onClick={hideWorkoutForm}>
          <FeaturesTitle hasWorkouts={Boolean(workoutsByLastAddedItem.length)}>Workouts Information</FeaturesTitle>
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
            setEditableWorkoutItemId={setEditableWorkoutItemId}
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
