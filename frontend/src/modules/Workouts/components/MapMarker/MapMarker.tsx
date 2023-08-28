import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';

import React, { ReactElement } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { workoutMarkerIcon } from '../../Workouts.utils';
import { useMapMarker } from './hooks/useMapMarker';

interface MarkerProps {
  currentWorkout: WorkoutItem;
}

const MapMarker = React.memo(({ currentWorkout }: MarkerProps): ReactElement => {
  const { determineStylesBasedOnWorkoutType, onSetMarker } = useMapMarker(currentWorkout.selectedValue);

  return (
    <Marker
      position={currentWorkout.coordinates}
      icon={workoutMarkerIcon(currentWorkout.selectedValue)}
      ref={(markerRef) => onSetMarker(markerRef)}
    >
      <Popup
        autoClose={false}
        closeOnClick={false}
        className={determineStylesBasedOnWorkoutType}
        position={currentWorkout.coordinates}
        autoPan={false}
      >
        {currentWorkout.selectedValue === 'running' ? '🏃‍♂️' : '🚴‍♀️'}
        &nbsp;
        {currentWorkout.description}
      </Popup>
    </Marker>
  );
});

export default MapMarker;
