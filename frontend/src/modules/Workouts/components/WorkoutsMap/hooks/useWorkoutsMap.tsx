import { LatLngExpression, LatLngTuple } from 'leaflet';
import { useEffect, useMemo } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

import useGeolocation from '../../../../../cdk/hooks/useGeolocation';
import { useAppDispatch } from '../../../../../store/store.hooks';
import { setClickedMapCoordinates } from '../../../../Auth/User.slice';
import { loadWeatherBasedOnWorkoutCoordinatesAction } from '../../../../WeatherDetails/WorkoutsDetails.actions';
import InitialMapMarker from '../../MapMarker/InitialMapMarker';
import MapMarker from '../../MapMarker/MapMarker';
import { WorkoutMapProps } from '../WorkoutsMap.types';

type HookProps = Omit<WorkoutMapProps, 'isFormShown' | 'setGroupRef' | 'setMapRef'>;

type ReturnedHookType = {
  currentPosition: LatLngExpression;
  location: CurrentLocationData;
  GenerateMarkerWithMapCoords: () => JSX.Element;
  GenerateInitialMarkerWithCurrentPosition: () => JSX.Element | null;
};

export const useWorkoutsMap = ({
  isSubmitted,
  workouts,
  onShowWorkoutForm,
  setEditableWorkoutItemId,
  setWorkoutMap,
}: HookProps): ReturnedHookType => {
  const location = useGeolocation();
  const currentPosition: LatLngExpression = useMemo(
    () => [location.coordinates.lat, location.coordinates.lng],
    [location.coordinates.lat, location.coordinates.lng]
  );

  const dispatch = useAppDispatch();

  const GenerateMarkerWithMapCoords = (): JSX.Element => {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        const coords: LatLngTuple = [lat, lng];

        map.locate().on('locationfound', function () {
          map.flyTo(e.latlng, map.getZoom(), { animate: true, duration: 1.2 });
        });

        setWorkoutMap(map);

        onShowWorkoutForm();
        setEditableWorkoutItemId(null);

        dispatch(setClickedMapCoordinates(coords));
        dispatch(loadWeatherBasedOnWorkoutCoordinatesAction({ lat, lng }));
      },
    });

    const renderMapMarkers = useMemo(() => {
      return workouts.map((workout: WorkoutItem) => {
        return isSubmitted && <MapMarker key={workout._id} currentWorkout={workout} />;
      });
    }, []);

    return <>{renderMapMarkers}</>;
  };

  const GenerateInitialMarkerWithCurrentPosition = (): JSX.Element | null => {
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
  };

  return {
    currentPosition,
    location,
    GenerateMarkerWithMapCoords,
    GenerateInitialMarkerWithCurrentPosition,
  };
};
