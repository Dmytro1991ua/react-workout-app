import { LatLngExpression } from 'leaflet';
import React, { ReactElement } from 'react';
import { Marker, Popup } from 'react-leaflet';

import { INITIAL_MAP_MARKER } from '../../Workouts.constants';
import { useMapMarker } from './hooks/useMapMarker';

interface InitialMapMarkerProps {
  position: LatLngExpression;
}

const InitialMapMarker = ({ position }: InitialMapMarkerProps): ReactElement => {
  const { onSetMarker } = useMapMarker();

  return (
    <Marker position={position} icon={INITIAL_MAP_MARKER} ref={(markerRef) => onSetMarker(markerRef)}>
      <Popup autoClose={false} closeOnClick={false} position={position} autoPan={false}>
        You are currently here!
      </Popup>
    </Marker>
  );
};

export default InitialMapMarker;
