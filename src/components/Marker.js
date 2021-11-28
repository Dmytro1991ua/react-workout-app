import React, { useContext } from 'react';
import { MapConsumer } from 'react-leaflet';
import L from 'leaflet'; // import Leaflet object from a library

import 'leaflet/dist/leaflet.css';
import '../leafletMap/LeafletStyles.css';
import { WorkoutsContext } from '../WorkoutsContext';

//create a leaflet map marker
const markerIcon = new L.Icon({
  iconUrl: require('../images/leaflet/marker.png').default,
  iconSize: [50, 55],
  iconAnchor: [0, 60],
  popupAnchor: [23, -60],
});

const Marker = ({ position }) => {
  const { marker, description, select } = useContext(WorkoutsContext);

  const [workoutDescription] = description;
  const [selectedValue] = select;

  return (
    <MapConsumer>
      {/* get access to a "map" object of a leaflet, get markers position based on click to a map and render with popup*/}
      {(map) => {
        L.marker(position, { icon: markerIcon })
          .addTo(map)
          .bindPopup(
            L.popup({
              autoClose: false,
              closeOnClick: false,
              className: selectedValue === 'running' ? 'running-popup' : 'cycling-popup',
            })
          )
          .setPopupContent(`${selectedValue === 'running' ? '🏃‍♂️' : '🚴‍♀️'}  ${workoutDescription()}`)
          .openPopup();
        return null;
      }}
    </MapConsumer>
  );
};

export default Marker;
