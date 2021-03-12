import { MapConsumer, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useEffect, useRef, useState } from "react";
import { leafletDetails } from "../leafletMap/leafletMap";
import L from "leaflet"; // import Leaflet object from a library

import "leaflet/dist/leaflet.css";
import "../leafletMap/LeafletStyles.css";
import useGeolocation from "../hooks/useGeolocation";

//create a leaflet map marker
const markerIcon = new L.Icon({
  iconUrl: require("../images/leaflet/marker.png").default,
  iconSize: [50, 55],
  iconAnchor: [0, 60],
  popupAnchor: [23, -60],
});


const WorkoutsMap = () => {
  //geolocation custom hook
  const location = useGeolocation();
  const currentPosition = [location.coordinates.lat, location.coordinates.lng];

  const ZOOM_LEVEL = 13; //default zoom level

  return (
    <>
      {/* Render leaflet map when current location is loaded and there is no error*/}
      {location.loaded && !location.error && (
        <MapContainer center={currentPosition} zoom={ZOOM_LEVEL}>
          <TileLayer
            attribution={leafletDetails.attribution}
            url={leafletDetails.url}
          />
          <Marker position={currentPosition} icon={markerIcon}>
            <Popup>
              <p> 🏃‍♂️ Workout </p>
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default WorkoutsMap;
