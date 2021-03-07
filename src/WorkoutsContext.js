import { createContext, useEffect, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  // burger menu and navigation "state"
  const [open, setOpen] = useState(false);

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
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};
