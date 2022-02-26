import L, { LatLngTuple } from 'leaflet'; // import Leaflet object from a library
import React, { ReactElement, useContext } from 'react';
import { MapConsumer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import MarkerImg from '../../../../assets/images/leaflet/marker.png';

//create a leaflet map marker
const markerIcon = new L.Icon({
  iconUrl: MarkerImg,
  iconSize: [50, 55],
  iconAnchor: [0, 60],
  popupAnchor: [23, -60],
});

interface MarkerProps {
  position: LatLngTuple;
}

const Marker = ({ position }: MarkerProps): ReactElement => {
  const { marker, description, select, workoutForm } = useContext(WorkoutsContext);

  const [workoutDescription] = description;
  const [selectedValue] = select;
  const [workoutFormValues] = workoutForm;

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
          .setPopupContent(
            `${selectedValue === 'running' ? '🏃‍♂️' : '🚴‍♀️'}  ${workoutDescription(
              workoutFormValues.workoutType,
              workoutFormValues.distance
            )}`
          )
          .openPopup();
        return null;
      }}
    </MapConsumer>
  );
};

export default Marker;
