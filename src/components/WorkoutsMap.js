import {
  MapConsumer,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import React, { useContext, useEffect, useRef, useState } from "react";
import { leafletDetails } from "../leafletMap/leafletMap";
import L from "leaflet"; // import Leaflet object from a library
import Form from "./Form";

import "leaflet/dist/leaflet.css";
import "../leafletMap/LeafletStyles.css";
import useGeolocation from "../hooks/useGeolocation";
import { WorkoutsContext } from "../WorkoutsContext";

//create a leaflet map marker
const markerIcon = new L.Icon({
  iconUrl: require("../images/leaflet/marker.png").default,
  iconSize: [50, 55],
  iconAnchor: [0, 60],
  popupAnchor: [23, -60],
});

const WorkoutsMap = () => {
  // destructure wokout form, selected workout "state"
  const { form, select } = useContext(WorkoutsContext);
  const [showForm, setShowForm] = form;
  const [selectedValue, setSelectedValue] = select;
  // const MarkerLocation = () => {
  //   //destructure marker coordinates, form "state"
  //   const { marker, show } = useContext(WorkoutsContext);
  //   const [markerCoordinates, setMarkerCoodinates] = marker;

  //   //   const map = useMapEvents({
  //   //     click(event) {
  //   //       const coordinates = event.latlng;
  //   //       //const newMarker = [coordinates.lat, coordinates.lng]
  //   //       setMarkerCoodinates((prevState) => [...prevState, coordinates]);
  //   //       console.log(markerCoordinates);
  //   //     },
  //   //     updateMarker(event) {
  //   //       console.log(markerCoordinates);
  //   //     },
  //   //   });

  //   //   return markerCoordinates === null ? null : (
  //   //     <>
  //   //       {markerCoordinates.map((element, index) => {
  //   //         <Marker position={currentPosition} icon={markerIcon}>
  //   //           <Popup>
  //   //             <p> 🏃‍♂️ Workout </p>
  //   //           </Popup>
  //   //         </Marker>;
  //   //       })}
  //   //     </>
  //   //   );
  //   // };
  // };

  //geolocation custom hook

  const location = useGeolocation();
  const currentPosition = [location.coordinates.lat, location.coordinates.lng];

  const ZOOM_LEVEL = 13; //default zoom level

  //show workouts form onClick to a leaflet map
  const handleShowForm = () => {
    setShowForm(!showForm);
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
          <MapConsumer>
            {/* get access to a "map" object of a leaflet, get markers position based on click to a map and render with popop*/}
            {(map) => {
              map.on("click", function (event) {
                const { lat, lng } = event.latlng;
                L.marker([lat, lng], { icon: markerIcon })
                  .addTo(map)
                  .bindPopup(
                    L.popup({
                      autoClose: false,
                      closeOnClick: false,
                      className:
                        selectedValue === "running"
                          ? "running-popup"
                          : "cycling-popup",
                    })
                  )
                  .setPopupContent(
                    `${selectedValue === "running" ? "🏃‍♂️ Running" : "🚴‍♀️ Cycling"}`
                  )
                  .openPopup();
              });
              map.on("click", handleShowForm);
              return null;
            }}
          </MapConsumer>
        </MapContainer>
      )}
    </>
  );
};
export default WorkoutsMap;
