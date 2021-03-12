import { createContext, useEffect, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  // burger menu and navigation "state"
  const [open, setOpen] = useState(false);
  // current location (geolocation) "state"
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

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
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};
