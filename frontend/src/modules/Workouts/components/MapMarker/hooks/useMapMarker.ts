import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

type ReturnedHookType = {
  onSetMarker: (value: L.Marker<any> | null) => void;
  determineStylesBasedOnWorkoutType: string;
};

export const useMapMarker = (selectedValue?: string): ReturnedHookType => {
  const workoutMap = useMap();

  const [marker, setMarker] = useState<L.Marker<any> | null>(null);

  const determineStylesBasedOnWorkoutType = selectedValue === 'running' ? 'running-popup' : 'cycling-popup';

  useEffect(() => {
    marker?.addTo(workoutMap).openPopup();
  }, [marker, workoutMap]);

  return {
    onSetMarker: setMarker,
    determineStylesBasedOnWorkoutType,
  };
};
