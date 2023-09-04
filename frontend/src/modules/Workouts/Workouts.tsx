import { reverse as _reverse } from 'lodash';
import React, { ReactElement } from 'react';
import { Bars } from 'react-loader-spinner';

import { colors } from '../../global-styles/ColorsPalette';
import { useAppSelector } from '../../store/store.hooks';
import { selectClickedMapCoordinates } from '../Auth/User.slice';
import { WorkoutsActionsPanel } from './components/Workout/components/WorkoutsActionsPanel/WorkoutsActionsPanel';
import Workout from './components/Workout/Workout';
import Form from './components/WorkoutForm/Form';
import WorkoutsMap from './components/WorkoutsMap/WorkoutsMap';
import { useWorkouts } from './hooks/useWorkouts';
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
import { generateWorkoutFallbackMessage } from './Workouts.utils';

const Workouts = (): ReactElement => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const mapCoordinates = useAppSelector(selectClickedMapCoordinates);
  const sortedWorkoutsSelectOption = useAppSelector(selectSortedWorkoutsSelectOption);
  const isLoading = useAppSelector(selectAreWorkoutsLoading);

  const workoutsByLastAddedItem = _reverse([...availableWorkouts]);

  const {
    isFormShown,
    editableWorkoutItemId,
    isSubmitted,
    onGetEditableWorkoutItemId,
    onSetEditableWorkoutItemId,
    onSetGroupRef,
    onSetMapRef,
    onSetIsSubmitted,
    onSetIsFormShownOnWorkoutEdit,
    onShowWorkoutForm,
    onStopWorkoutFormPropagation,
    mapRef,
    isFormShownOnWorkoutEdit,
    getDefaultOrSortedWorkouts,
    hasWorkouts,
    onHideWorkoutForm,
    onShowAllWorkoutMarkers,
  } = useWorkouts({
    workoutsByLastAddedItem,
    availableWorkouts,
    sortedWorkoutsSelectOption,
  });

  const renderFallbackMessageWhenNoWorkout = generateWorkoutFallbackMessage({
    isLoading,
    availableWorkouts,
    sortedWorkoutsSelectOption,
    workoutsByLastAddedItem,
  });

  const renderActionsPanel = (
    <>
      {availableWorkouts.length && (
        <ActionsPanel>
          <WorkoutsActionsPanel onShowAllWorkoutMarkers={onShowAllWorkoutMarkers} />
        </ActionsPanel>
      )}
    </>
  );

  const renderWorkoutForm = (
    <>
      {(isFormShown || isFormShownOnWorkoutEdit) && (
        <Form
          onStopPropagation={onStopWorkoutFormPropagation}
          onCloseWorkoutForm={onHideWorkoutForm}
          mapCoords={mapCoordinates}
          isFormShownOnWorkoutEdit={onSetIsFormShownOnWorkoutEdit}
          editableWorkoutItemId={editableWorkoutItemId}
          isFormShown={isFormShown}
          onIsSubmitted={onSetIsSubmitted}
          onEditableWorkoutItemId={onSetEditableWorkoutItemId}
        />
      )}
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
            isFormShownOnWorkoutEdit={onSetIsFormShownOnWorkoutEdit}
            isFormShown={isFormShownOnWorkoutEdit}
            setEditableWorkoutItemId={onGetEditableWorkoutItemId}
            workoutMap={mapRef}
          />
        ))
      )}
    </>
  );

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures onClick={onHideWorkoutForm}>
          <FeaturesTitle hasWorkouts={hasWorkouts}>Workouts Information</FeaturesTitle>
          {renderActionsPanel}
          {renderWorkoutForm}
          {renderFallbackMessageWhenNoWorkout}
          {renderAvailableWorkouts}
        </WorkoutsFeatures>
        <Map>
          <WorkoutsMap
            onShowWorkoutForm={onShowWorkoutForm}
            isFormShown={isFormShown}
            workouts={getDefaultOrSortedWorkouts}
            setEditableWorkoutItemId={onSetEditableWorkoutItemId}
            isSubmitted={isSubmitted}
            setGroupRef={onSetGroupRef}
            setMapRef={onSetMapRef}
          />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
