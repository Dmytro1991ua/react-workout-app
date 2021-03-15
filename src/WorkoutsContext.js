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
  // show workout form "state"
  const [showForm, setShowForm] = useState(false);
  // selected workout value from a from
  const [selectedValue, setSelectedValue] = useState("running");
  // workout form's(inputs values) releated "states"
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [cadence, setCadence] = useState("");
  const [elevationGain, setElevationGain] = useState("");
  // workouts data recieved from a workout form "state"
  const [workouts, setWorkouts] = useState([]);

  // run preloader
  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  // calculate running pace
  const runningPace = () => {
    return Number((distance / duration).toFixed(1));
  };
  //calculate cycling speed
  const cyclingSpeed = () => {
    return Number((distance / (duration / 60)).toFixed(1));
  };

  // create a workout description based on a type of workout and currrent date
  const workoutDescription = () => {
    // prettier-ignore
    const months = [
      "January",
      "Fabruary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${selectedValue[0].toUpperCase()}${selectedValue.slice(1)} on ${
      months[new Date().getMonth()]
    } ${new Date().getDate()}`;
  };

  // get a workout data from form inputs based on selected workout (either Running or Cycling)
  const getWorkoutData = (selectedType) => {
    // workout data object(same for Running and Cycling) from workout form
    const workoutData = {
      id: (Date.now() + "").slice(-10),
      date: new Date(),
      selectedValue,
      distance,
      duration,
    };

    setWorkouts([...workouts, workoutData]); // add newly create object from form to workouts array

    if (selectedType === "running") {
      setWorkouts([
        ...workouts,
        {
          ...workoutData,
          cadence,
          pace: runningPace(),
          description: workoutDescription(),
        },
      ]);
    }

    if (selectedType === "cycling") {
      setWorkouts([
        ...workouts,
        {
          ...workoutData,
          elevationGain,
          speed: cyclingSpeed(),
          description: workoutDescription(),
        },
      ]);
    }
  };

  return (
    <WorkoutsContext.Provider
      value={{
        loader: [preloader, setPreloader],
        show: [open, setOpen],
        currentLocation: [location, setLocation],
        form: [showForm, setShowForm],
        select: [selectedValue, setSelectedValue],
        distanceData: [distance, setDistance],
        durationData: [duration, setDuration],
        cadenceData: [cadence, setCadence],
        elevationGainData: [elevationGain, setElevationGain],
        workoutsData: [workouts, setWorkouts],
        workoutRender: [getWorkoutData],
        description: [workoutDescription],
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};
