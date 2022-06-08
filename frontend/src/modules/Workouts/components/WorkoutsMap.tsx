import { LatLngExpression, LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { ReactElement, useEffect } from 'react';
import { LayersControl, MapContainer, TileLayer, useMap, useMapEvents } from 'react-leaflet';

import useGeolocation from '../../../hooks/useGeolocation';
import '../../leafletMap/leaflet.css';
import MapMarker from './MapMarker/MapMarker';
import { MAP_TILES_DETAILS_CONFIG, ZOOM_LEVEL } from '../Workouts.constants';
import InitialMapMarker from './MapMarker/InitialMapMarker';
import { FeatureGroup } from 'react-leaflet';
import { useAppDispatch } from '../../../store/store.hooks';
import { loadWeatherBasedOnWorkoutCoordinatesAction } from '../../WeatherDetails/WorkoutsDetails.actions';
import { setClickedMapCoordinates } from '../../Auth/User.slice';

interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  isFormShown: boolean;
  workouts: WorkoutItem[];
  setEditableWorkoutItemId: (value: string | null) => void;
  isSubmitted: boolean | null;
  setWorkoutMap: (value: L.Map | null) => void;
  setGroupRef: (value: L.FeatureGroup<any> | null) => void;
  setMapRef: (value: L.Map | null) => void;
}

const WorkoutsMap = ({
  onShowWorkoutForm,
  isFormShown,
  workouts,
  setEditableWorkoutItemId,
  isSubmitted,
  setWorkoutMap,
  setGroupRef,
  setMapRef,
}: WorkoutMapProps): ReactElement => {
  //geolocation custom hook
  const location = useGeolocation();
  const currentPosition: LatLngExpression = [location.coordinates.lat, location.coordinates.lng];

  const dispatch = useAppDispatch();

  const { BaseLayer } = LayersControl;

  //get a clicked marker coordinates, store them in a "state" and show workout
  const GetMapCoordsAndRenderMarker = (): JSX.Element => {
    const map = useMapEvents({
      click: (e) => {
        map.locate().on('locationfound', function () {
          map.flyTo(e.latlng, map.getZoom(), { animate: true, duration: 1.2 });
        });

        onShowWorkoutForm();
        setEditableWorkoutItemId(null);

        const { lat, lng } = e.latlng;
        const coords: LatLngTuple = [lat, lng];

        dispatch(setClickedMapCoordinates(coords));
        dispatch(loadWeatherBasedOnWorkoutCoordinatesAction({ lat, lng }));
      },
    });

    useEffect(() => {
      setWorkoutMap(map);
    });

    const renderMapMarkers = workouts.map((workout: WorkoutItem) => {
      return isSubmitted && <MapMarker key={workout._id} currentWorkout={workout} />;
    });

    return <>{renderMapMarkers}</>;
  };

  function RenderMarkerWithCurrentPosition(): JSX.Element | null {
    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        map.flyTo(e.latlng, map.getZoom(), { animate: true, duration: 1.2 });
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
      {location.loaded && !location.errorMessage && (
        <MapContainer
          center={currentPosition}
          zoom={ZOOM_LEVEL}
          closePopupOnClick={false}
          whenCreated={(mapInstance) => {
            setMapRef(mapInstance);
          }}>
          <LayersControl>
            {MAP_TILES_DETAILS_CONFIG.map((mapTile) => (
              <BaseLayer checked={mapTile.default} name={mapTile.name} key={mapTile.id}>
                <TileLayer attribution={mapTile.attribution} url={mapTile.url} />
              </BaseLayer>
            ))}
          </LayersControl>

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
