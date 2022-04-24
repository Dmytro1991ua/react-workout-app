import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { ReactElement, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';

import useGeolocation from '../../../hooks/useGeolocation';
import { leafletDetails } from '../../leafletMap/leafletMap';
import '../../leafletMap/leaflet.css';
import MapMarker from './MapMarker/MapMarker';
import { ZOOM_LEVEL } from '../Workouts.constants';
import InitialMapMarker from './MapMarker/InitialMapMarker';
import { FeatureGroup } from 'react-leaflet';

interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  setMapCoords: React.Dispatch<React.SetStateAction<LatLngTuple | null>>;
  isFormShown: boolean;
  workouts: WorkoutItem[];
  setEditableWorkoutItem: (value: WorkoutItem | null) => void;
  isSubmitted: boolean | null;
  setWorkoutMap: (value: L.Map | null) => void;
  setGroupRef: (value: L.FeatureGroup<any> | null) => void;
  setMapRef: (value: L.Map | null) => void;
}

const WorkoutsMap = ({
  onShowWorkoutForm,
  setMapCoords,
  isFormShown,
  workouts,
  setEditableWorkoutItem,
  isSubmitted,
  setWorkoutMap,
  setGroupRef,
  setMapRef,
}: WorkoutMapProps): ReactElement => {
  //geolocation custom hook
  const location = useGeolocation();
  const currentPosition: LatLngExpression = [location.coordinates.lat, location.coordinates.lng];

  //get a clicked marker coordinates, store them in a "state" and show workout
  const GetMapCoordsAndRenderMarker = (): JSX.Element => {
    const map = useMapEvents({
      click: (e) => {
        map.locate().on('locationfound', function () {
          map.flyTo(e.latlng, map.getZoom(), { animate: true });
        });

        onShowWorkoutForm();
        setEditableWorkoutItem(null);

        const { lat, lng } = e.latlng;
        const coords: LatLngTuple = [lat, lng];
        setMapCoords(coords);
      },
    });

    const renderMapMarkers = workouts.map((workout: WorkoutItem) => {
      return isSubmitted && <MapMarker key={workout.id} currentWorkout={workout} />;
    });

    setWorkoutMap(map);

    return <>{renderMapMarkers}</>;
  };

  function RenderMarkerWithCurrentPosition(): JSX.Element | null {
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
        <MapContainer
          center={currentPosition}
          zoom={ZOOM_LEVEL}
          closePopupOnClick={false}
          whenCreated={(mapInstance) => {
            setMapRef(mapInstance);
          }}
        >
          /
          <TileLayer attribution={leafletDetails.attribution} url={leafletDetails.url} />
          <FeatureGroup ref={(ref) => setGroupRef(ref)}>
            <GetMapCoordsAndRenderMarker />
          </FeatureGroup>
          {!workouts.length && !isFormShown && <RenderMarkerWithCurrentPosition />}
        </MapContainer>
      )}
    </>
  );
};
export default WorkoutsMap;
