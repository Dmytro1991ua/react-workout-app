import { MapContainer, TileLayer } from "react-leaflet";
import React, { useState } from "react";
import { leafletDetails } from "../leafletMap/leafletMap";

import "../../node_modules/leaflet/dist/leaflet.css";
import '../leafletMap/LeafletStyles.css'


const WorkoutsMap = () => {
  // "map" state
  const [center,setCenter] = useState({
    lat: 48.36617,
    lng: 33.50337,
  });
  const ZOOM_LEVEL = 13; //default zoom level

  return (
     <MapContainer center={center} zoom={ZOOM_LEVEL} >
      <TileLayer
        attribution={leafletDetails.attribution}
        url={leafletDetails.url}
      />
    </MapContainer>
  );
};

export default WorkoutsMap;
