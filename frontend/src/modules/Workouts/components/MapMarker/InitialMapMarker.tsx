import { LatLngExpression } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

import { INITIAL_MAP_MARKER } from '../../Workouts.constants';

interface InitialMapMarkerProps {
  position: LatLngExpression;
}

const InitialMapMarker = ({ position }: InitialMapMarkerProps) => {
  const workoutMap = useMap();

  const [marker, setMarker] = useState<L.Marker<any> | null>(null);

  useEffect(() => {
    marker?.addTo(workoutMap).openPopup();
  }, [marker, workoutMap]);

  return (
    <Marker position={position} icon={INITIAL_MAP_MARKER} ref={(markerRef) => setMarker(markerRef)}>
      <Popup autoClose={false} closeOnClick={false} position={position} autoPan={false}>
        You are currently here!
      </Popup>
    </Marker>
  );
};

export default InitialMapMarker;
