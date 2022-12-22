import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';

import L from 'leaflet'; // import Leaflet object from a library
import React, { ReactElement, useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

import { workoutMarkerIcon } from '../../Workouts.utils';

interface MarkerProps {
  currentWorkout: WorkoutItem;
}

const MapMarker = React.memo(({ currentWorkout }: MarkerProps): ReactElement => {
  const workoutMap = useMap();

  const [marker, setMarker] = useState<L.Marker<any> | null>(null);

  const determineStylesBasedOnWorkoutType =
    currentWorkout.selectedValue === 'running' ? 'running-popup' : 'cycling-popup';

  useEffect(() => {
    marker?.addTo(workoutMap).openPopup();
  }, [marker, workoutMap]);

  return (
    <Marker
      position={currentWorkout.coordinates}
      icon={workoutMarkerIcon(currentWorkout.selectedValue)}
      ref={(markerRef) => setMarker(markerRef)}
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
