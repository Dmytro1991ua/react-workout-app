import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { ReactElement, useContext, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';

import useGeolocation from '../../../hooks/useGeolocation';
import { leafletDetails } from '../../leafletMap/leafletMap';
import '../../leafletMap/leaflet.css';
import { WorkoutsContext, WorkoutsProps } from '../../../context/WorkoutsContext';
import MapMarker from './MapMarker/MapMarker';
import { ZOOM_LEVEL } from '../Workouts.constants';
import InitialMapMarker from './MapMarker/InitialMapMarker';

interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  setMapCoords: React.Dispatch<React.SetStateAction<LatLngTuple | null>>;
  isFormShown: boolean;
}

const WorkoutsMap = ({ onShowWorkoutForm, setMapCoords, isFormShown }: WorkoutMapProps): ReactElement => {
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
        map.locate().on('locationfound', function () {
          map.flyTo(e.latlng, map.getZoom(), { animate: true });
        });

        onShowWorkoutForm();

        const { lat, lng } = e.latlng;
        const coords: LatLngTuple = [lat, lng];
        setMapCoords(coords);
      },
    });

    return (
      workouts &&
      workouts.map((workout: WorkoutsProps) => {
        return isSubmitted && <MapMarker key={workout.id} currentWorkout={workout} />;
      })
    );
  };

  function RenderMarkerWithCurrentPosition() {
    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        map.flyTo(e.latlng, map.getZoom(), { animate: true });
      });
      return function cleanup() {
        map.stopLocate();
      };
    }, [map]);

    return currentPosition === null ? null : <InitialMapMarker position={currentPosition} />;
  }

  return (
    <>
      {/* Render leaflet map when current location is loaded and there is no error*/}
      {location.loaded && !location.error && (
        <MapContainer center={currentPosition} zoom={ZOOM_LEVEL} closePopupOnClick={false}>
          <TileLayer attribution={leafletDetails.attribution} url={leafletDetails.url} />
          <GetMapCoordsAndRenderMarker />
          {!workouts.length && !isFormShown && <RenderMarkerWithCurrentPosition />}
        </MapContainer>
      )}
    </>
  );
};
export default WorkoutsMap;
