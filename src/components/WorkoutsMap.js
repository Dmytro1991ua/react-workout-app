import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import React, { useContext } from "react";
import { leafletDetails } from "../leafletMap/leafletMap";

import "leaflet/dist/leaflet.css";
import "../leafletMap/LeafletStyles.css";
import useGeolocation from "../hooks/useGeolocation";
import { WorkoutsContext } from "../WorkoutsContext";
import Marker from "./Marker";

const WorkoutsMap = () => {
  // destructure certain "states" from Context
  const { form, marker, submit } = useContext(WorkoutsContext);

  const [showForm, setShowForm] = form;
  const [markerCoordinates, setMakerCoordinates] = marker;
  const [isSubmitted, setIsSubmitted] = submit;

  //geolocation custom hook
  const location = useGeolocation();
  const currentPosition = [location.coordinates.lat, location.coordinates.lng];

  const ZOOM_LEVEL = 13; //default zoom level

  //show workouts form onClick to a leaflet map
  const handleShowForm = () => {
    setShowForm(true);
  };

  //get a clicked marker coordinates, store them in a "state" and show workout
  const MarkerCoordinates = () => {
    useMapEvents({
      click: (e) => {
        handleShowForm();
        const { lat, lng } = e.latlng;
        setMakerCoordinates([lat, lng]);
      },
    });
    return null;
  };

  return (
    <>
      {/* Render leaflet map when current location is loaded and there is no error*/}
      {location.loaded && !location.error && (
        <MapContainer center={currentPosition} zoom={ZOOM_LEVEL}>
          <TileLayer
            attribution={leafletDetails.attribution}
            url={leafletDetails.url}
          />
          <MarkerCoordinates />
          {/* render a Marker on map after submitting a workout form*/}
          <>{isSubmitted && !showForm && <Marker />}</>
        </MapContainer>
      )}
    </>
  );
};
export default WorkoutsMap;
