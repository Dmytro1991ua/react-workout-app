import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { v4 as uuidv4 } from 'uuid';
import React, { ReactElement, useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';

import useGeolocation from '../../../hooks/useGeolocation';
import { leafletDetails } from '../../leafletMap/leafletMap';
import '../../leafletMap/leaflet.css';
import { WorkoutsContext, WorkoutsProps } from '../../../context/WorkoutsContext';
import MapMarker from './MapMarker/MapMarker';
import { ZOOM_LEVEL } from '../Workouts.constants';

interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  setMapCoords: React.Dispatch<React.SetStateAction<LatLngTuple | null>>;
}

const WorkoutsMap = ({ onShowWorkoutForm, setMapCoords }: WorkoutMapProps): ReactElement => {
  // destructure certain "states" from Context
  const { submit, workoutsData } = useContext(WorkoutsContext);

  const [isSubmitted, setIsSubmitted] = submit;
  const [workouts] = workoutsData;

  //geolocation custom hook
  const location = useGeolocation();
  const currentPosition: LatLngExpression = [location.coordinates.lat, location.coordinates.lng];

  //get a clicked marker coordinates, store them in a "state" and show workout
  const GetMapCoordsAndRenderMarker = (): ReactElement => {
    const map = useMapEvents({
      click: (e) => {
        map.locate();

        onShowWorkoutForm();

        const { lat, lng } = e.latlng;
        const coords: LatLngTuple = [lat, lng];
        setMapCoords(coords);

        map.flyTo(coords, map.getZoom(), { animate: true });
      },
    });

    return (
      workouts &&
      workouts.map((workout: WorkoutsProps) => {
        return isSubmitted && <MapMarker key={workout.id} currentWorkout={workout} />;
      })
    );
  };

  return (
    <>
      {/* Render leaflet map when current location is loaded and there is no error*/}
      {location.loaded && !location.error && (
        <MapContainer center={currentPosition} zoom={ZOOM_LEVEL} closePopupOnClick={false}>
          <TileLayer attribution={leafletDetails.attribution} url={leafletDetails.url} />
          <GetMapCoordsAndRenderMarker />
        </MapContainer>
      )}
    </>
  );
};
export default WorkoutsMap;
