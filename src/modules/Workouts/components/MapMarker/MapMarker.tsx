import L from 'leaflet'; // import Leaflet object from a library

import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';
import { WorkoutsContext, WorkoutsProps } from '../../../../context/WorkoutsContext';

import { MAX_MARKER_POP_UP_WIDTH, MIN_MARKER_POP_UP_WIDTH } from './../../Workouts.constants';
import { workoutMarkerIcon } from '../../Workouts.utils';

//create a leaflet map marker

interface MarkerProps {
  currentWorkout: WorkoutsProps;
}

const MapMarker = ({ currentWorkout }: MarkerProps): ReactElement => {
  const { description } = useContext(WorkoutsContext);
  const [workoutDescription] = description;

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
        minWidth={MIN_MARKER_POP_UP_WIDTH}
        maxWidth={MAX_MARKER_POP_UP_WIDTH}
        position={currentWorkout.coordinates}
        autoPan={false}
      >
        {currentWorkout.selectedValue === 'running' ? '🏃‍♂️' : '🚴‍♀️'}
        {workoutDescription(currentWorkout.selectedValue, currentWorkout.distance)}
      </Popup>
    </Marker>
  );
};

export default MapMarker;