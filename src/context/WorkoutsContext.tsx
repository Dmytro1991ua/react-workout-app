import { LatLngTuple } from 'leaflet';
import { createContext, useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { WorkoutFormInitialValues } from '../modules/Workouts/components/WorkoutForm/Form.interfaces';
import { MONTHS_LIST } from '../modules/Workouts/Workouts.constants';

export interface WorkoutsProps {
  id: string;
  date: string;
  coordinates: LatLngTuple;
  selectedValue: string;
  distance: number;
  duration: number;
  cadence?: string;
  elevationGain?: string;
  pace?: number;
  description?: string;
  speed?: number;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const WorkoutsContext = createContext({} as any);
/* eslint-disable @typescript-eslint/no-explicit-any */
export const WorkoutsProvider = (props: any) => {
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  // current location (geolocation) "state"
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  // selected workout value from a from
  const [selectedValue, setSelectedValue] = useState('running');
  const [workoutFormValues, setWorkoutFormValues] = useState<WorkoutFormInitialValues>({
    workoutType: 'running',
    distance: 0,
    duration: 0,
    cadence: '',
    elevationGain: '',
  });

  const [workouts, setWorkouts] = useLocalStorage<WorkoutsProps[]>('workouts', []);

  // "state" of a submitting form in order to render Marker later on
  const [isSubmitted, setIsSubmitted] = useState(false);

  // run preloader
  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  // calculate running pace
  const runningPace = (duration: number, distance: number): number => {
    return Number((duration / distance).toFixed(1));
  };

  //calculate cycling speed
  const cyclingSpeed = (duration: number, distance: number): number => {
    return Number((distance / (duration / 60)).toFixed(1));
  };

  // create a workout description based on a type of workout and currrent date
  const workoutDescription = (workoutType: string, distance: number) => {
    return `${workoutType[0].toUpperCase()}${workoutType?.slice(1)} ${distance} km on ${
      MONTHS_LIST[new Date().getMonth()]
    } ${new Date().getDate()} at ${new Date().toLocaleTimeString()}`;
  };

  // get a workout data from form inputs based on selected workout (either Running or Cycling)
  const getWorkoutData = (formData: FieldValues, mapCoords: LatLngTuple) => {
    // workout data object(same for Running and Cycling) from workout form
    const workoutData: WorkoutsProps = {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      coordinates: mapCoords,
      selectedValue: formData.workoutType,
      distance: formData.distance,
      duration: formData.duration,
    };

    setWorkouts([...new Set([...workouts, workoutData])]); // add newly created object from form to workouts array

    if (formData.workoutType === 'running') {
      setWorkouts([
        ...new Set([
          ...workouts,
          {
            ...workoutData,
            cadence: formData.cadence,
            pace: runningPace(formData.duration, formData.distance),
            description: workoutDescription(formData.workoutType, formData.distance),
          },
        ]),
      ]);
    }

    if (formData.workoutType === 'cycling') {
      setWorkouts([
        ...new Set([
          ...workouts,
          {
            ...workoutData,
            elevationGain: formData.elevationGain,
            speed: cyclingSpeed(formData.duration, formData.distance),
            description: workoutDescription(formData.workoutType, formData.distance),
          },
        ]),
      ]);
    }
  };

  return (
    <WorkoutsContext.Provider
      value={{
        loader: [preloader, setPreloader],
        currentLocation: [location, setLocation],
        select: [selectedValue, setSelectedValue],
        workoutsData: [workouts, setWorkouts],
        workoutRender: [getWorkoutData],
        description: [workoutDescription],
        submit: [isSubmitted, setIsSubmitted],
        workoutForm: [workoutFormValues, setWorkoutFormValues],
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};
