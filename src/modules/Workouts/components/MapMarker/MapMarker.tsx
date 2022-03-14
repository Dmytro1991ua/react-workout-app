import L, { LatLngTuple } from 'leaflet'; // import Leaflet object from a library

import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';

import { MAX_MARKER_POP_UP_WIDTH, MIN_MARKER_POP_UP_WIDTH } from './../../Workouts.constants';
import { workoutMarkerIcon } from '../../Workouts.utils';

//create a leaflet map marker

interface MarkerProps {
  position: LatLngTuple;
}

const MapMarker = ({ position }: MarkerProps): ReactElement => {
  const { description, workoutForm } = useContext(WorkoutsContext);
  const [workoutDescription] = description;
  const [workoutFormValues] = workoutForm;

  const workoutMap = useMap();

  const [marker, setMarker] = useState<L.Marker<any> | null>(null);

  const determineStylesBasedOnWorkoutType =
    workoutFormValues.workoutType === 'running' ? 'running-popup' : 'cycling-popup';

  useEffect(() => {
    marker?.addTo(workoutMap).openPopup();
  }, [marker, workoutMap]);

  return (
    <Marker
      position={position}
      icon={workoutMarkerIcon(workoutFormValues.workoutType)}
      ref={(markerRef) => setMarker(markerRef)}
    >
      <Popup
        autoClose={false}
        closeOnClick={false}
        className={determineStylesBasedOnWorkoutType}
        minWidth={MIN_MARKER_POP_UP_WIDTH}
        maxWidth={MAX_MARKER_POP_UP_WIDTH}
        position={position}
        autoPan={false}
      >
        {workoutFormValues.workoutType === 'running' ? '🏃‍♂️' : '🚴‍♀️'}
        {workoutDescription(workoutFormValues.workoutType, workoutFormValues.distance)}
      </Popup>
    </Marker>
  );
};

export default MapMarker;
