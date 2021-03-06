import { createContext, useState } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsProvider = (props) => {
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  // burger menu and navigation "state"
  const [open, setOpen] = useState(false);

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
