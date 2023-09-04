import { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { useCallback, useEffect, useMemo, useState } from 'react';

import useGeolocation from '../../../cdk/hooks/useGeolocation';
import InitialMapMarker from '../components/MapMarker/InitialMapMarker';
import { sortedWorkoutsByWorkoutTypeAndIndicatorConfig } from '../Workouts.configs';
import { SortedWorkoutsSelectOption } from '../Workouts.enums';

type HookProps = {
  workoutsByLastAddedItem: WorkoutItem[];
  availableWorkouts: WorkoutItem[];
  sortedWorkoutsSelectOption: SortedWorkoutsSelectOption;
};

type ReturnedHookType = {
  isFormShown: boolean;
  isFormShownOnWorkoutEdit: boolean;
  hasWorkouts: boolean;
  isSubmitted: boolean | null;
  editableWorkoutItemId: string | null;
  mapRef: L.Map | null;
  getDefaultOrSortedWorkouts: WorkoutItem[];
  onSetGroupRef: (value: L.FeatureGroup<any> | null) => void;
  onSetMapRef: (value: L.Map | null) => void;
  onStopWorkoutFormPropagation: (e: React.MouseEvent) => void;
  onShowWorkoutForm: () => void;
  onHideWorkoutForm: () => void;
  onGetEditableWorkoutItemId: (id: string | null) => void;
  onShowAllWorkoutMarkers: () => void;
  onSetEditableWorkoutItemId: (value: string | null) => void;
  onSetIsSubmitted: (value: boolean | null) => void;
  onSetIsFormShownOnWorkoutEdit: (value: boolean) => void;
};

export const useWorkouts = ({
  workoutsByLastAddedItem,
  availableWorkouts,
  sortedWorkoutsSelectOption,
}: HookProps): ReturnedHookType => {
  const location = useGeolocation();

  const [isFormShown, setIsFormShown] = useState<boolean>(false);
  const [isFormShownOnWorkoutEdit, setIsFormShownOnWorkoutEdit] = useState<boolean>(false);
  const [editableWorkoutItemId, setEditableWorkoutItemId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean | null>(null);
  const [groupRef, setGroupRef] = useState<L.FeatureGroup<any> | null>(null);
  const [mapRef, setMapRef] = useState<L.Map | null>(null);

  const currentPosition: LatLngExpression = useMemo(
    () => [location.coordinates.lat, location.coordinates.lng],
    [location.coordinates.lat, location.coordinates.lng]
  );

  const hasWorkouts = Boolean(workoutsByLastAddedItem.length);

  useEffect(() => {
    <InitialMapMarker position={currentPosition} />;

    if (!isSubmitted) {
      setIsSubmitted(!isSubmitted);
    }
  }, [currentPosition, isSubmitted]);

  const sortedWorkoutsConfig = useMemo(
    () => sortedWorkoutsByWorkoutTypeAndIndicatorConfig(availableWorkouts, workoutsByLastAddedItem),
    [availableWorkouts, workoutsByLastAddedItem]
  );
  const getWorkoutsByWorkoutType = sortedWorkoutsConfig[sortedWorkoutsSelectOption];

  const getDefaultOrSortedWorkouts: WorkoutItem[] = sortedWorkoutsSelectOption
    ? getWorkoutsByWorkoutType
    : workoutsByLastAddedItem;

  const onStopWorkoutFormPropagation = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation();
  }, []);

  const onShowWorkoutForm = useCallback((): void => {
    setIsFormShown(true);
  }, []);

  const onHideWorkoutForm = useCallback((): void => {
    setIsFormShown(false);
    setIsFormShownOnWorkoutEdit(false);
    setEditableWorkoutItemId(null);
  }, []);

  const onGetEditableWorkoutItemId = useCallback(
    (id: string | null): void => {
      if (isFormShownOnWorkoutEdit) {
        setEditableWorkoutItemId(null);
      } else {
        setEditableWorkoutItemId(id);
      }
    },
    [isFormShownOnWorkoutEdit]
  );

  const onShowAllWorkoutMarkers = useCallback(() => {
    mapRef?.fitBounds(groupRef?.getBounds() as LatLngBoundsExpression);
  }, [groupRef, mapRef]);

  return {
    isFormShown,
    isFormShownOnWorkoutEdit,
    hasWorkouts,
    isSubmitted,
    editableWorkoutItemId,
    mapRef,
    getDefaultOrSortedWorkouts,
    onSetGroupRef: setGroupRef,
    onSetMapRef: setMapRef,
    onSetEditableWorkoutItemId: setEditableWorkoutItemId,
    onSetIsSubmitted: setIsSubmitted,
    onSetIsFormShownOnWorkoutEdit: setIsFormShownOnWorkoutEdit,
    onStopWorkoutFormPropagation,
    onShowWorkoutForm,
    onHideWorkoutForm,
    onGetEditableWorkoutItemId,
    onShowAllWorkoutMarkers,
  };
};
