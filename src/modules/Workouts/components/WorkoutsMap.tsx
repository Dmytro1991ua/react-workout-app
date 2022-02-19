import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

import useGeolocation from '../../../hooks/useGeolocation';
import { leafletDetails } from '../../leafletMap/leafletMap';
import '../../leafletMap/leaflet.css';
import { WorkoutsContext } from '../../../context/WorkoutsContext';
import Marker from './Marker/Marker';

interface WorkoutMapProps {
  onShowWorkoutForm: () => void;
  showForm: boolean;
}

const WorkoutsMap = ({ onShowWorkoutForm, showForm }: WorkoutMapProps) => {
  // destructure certain "states" from Context
  const { form, marker, submit, workoutsData } = useContext(WorkoutsContext);

  // const [showForm, setShowForm] = form;
  const [markerCoordinates, setMakerCoordinates] = marker;
  const [isSubmitted, setIsSubmitted] = submit;

  //geolocation custom hook
  const location = useGeolocation();
  const currentPosition: LatLngExpression = [location.coordinates.lat, location.coordinates.lng];

  const ZOOM_LEVEL = 13; //default zoom level

  const handleShowForm = () => {
    onShowWorkoutForm();
  };

  //get a clicked marker coordinates, store them in a "state" and show workout
  const MarkerCoordinates = () => {
    useMapEvents({
      click: (e) => {
        handleShowForm();
        const { lat, lng } = e.latlng;
        const coords = [lat, lng];
        setMakerCoordinates([...markerCoordinates, coords]);

        // seStoredMarkerCoords([...storedMarkerCoods, coords]);
        // console.log(storedMarkerCoods);
        // localStorage.setItem(
        //   "position-latitude",
        //   JSON.stringify([...storedMarkerCoods, coords])
        // );
        // //localStorage.setItem("position-longitude", current.lng);
      },
    });
    return null;
  };

  useEffect(() => {
    const markerCoords = JSON.parse(localStorage.getItem('marker-coords') || '[]');

    if (!markerCoords) return;

    setMakerCoordinates(markerCoords);
  }, []);

  return (
    <>
      {/* Render leaflet map when current location is loaded and there is no error*/}
      {location.loaded && !location.error && (
        <MapContainer center={currentPosition} zoom={ZOOM_LEVEL}>
          <TileLayer attribution={leafletDetails.attribution} url={leafletDetails.url} />
          <MarkerCoordinates />
          {/* render a Marker on map after submitting a workout form*/}
          <>
            {isSubmitted &&
              !showForm &&
              markerCoordinates.map((coords: any, index: any) => <Marker key={index} position={coords} />)}
          </>
        </MapContainer>
      )}
    </>
  );
};
export default WorkoutsMap;
