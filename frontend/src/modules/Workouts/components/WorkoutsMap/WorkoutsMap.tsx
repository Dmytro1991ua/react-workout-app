import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';

import React, { ReactElement } from 'react';
import { FeatureGroup, LayersControl, MapContainer, TileLayer } from 'react-leaflet';

import { MAP_TILES_DETAILS_CONFIG, ZOOM_LEVEL } from '../../Workouts.constants';
import { useWorkoutsMap } from './hooks/useWorkoutsMap';
import { WorkoutMapProps } from './WorkoutsMap.types';

const WorkoutsMap = React.memo(
  ({
    onShowWorkoutForm,
    isFormShown,
    workouts,
    setEditableWorkoutItemId,
    isSubmitted,
    setWorkoutMap,
    setGroupRef,
    setMapRef,
  }: WorkoutMapProps): ReactElement => {
    const { BaseLayer } = LayersControl;

    const { currentPosition, location, GenerateMarkerWithMapCoords, GenerateInitialMarkerWithCurrentPosition } =
      useWorkoutsMap({
        isSubmitted,
        workouts,
        onShowWorkoutForm,
        setEditableWorkoutItemId,
        setWorkoutMap,
      });

    return (
      <>
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
              <GenerateMarkerWithMapCoords />
            </FeatureGroup>
            {!workouts.length && !isFormShown && <GenerateInitialMarkerWithCurrentPosition />}
          </MapContainer>
        )}
      </>
    );
  }
);
export default WorkoutsMap;
