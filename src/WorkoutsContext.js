import { createContext, useEffect, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  // burger menu, navigation, form "state"
  const [open, setOpen] = useState(false);
  // current location (geolocation) "state"
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  // show workout form
  const [showForm, setShowForm] = useState(false);
  // selected workout value from a from
  const [selectedValue, setSelectedValue] = useState("running");

  // // leaflet marker coordinates
  // const [markerCoordinates, setMarkerCoodinates] = useState([]);

  // run preloader
  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  return (
    <WorkoutsContext.Provider
      value={{
        loader: [preloader, setPreloader],
        show: [open, setOpen],
        currentLocation: [location, setLocation],
        form: [showForm, setShowForm],
        select: [selectedValue, setSelectedValue],
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};
