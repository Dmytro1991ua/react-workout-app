import axios from 'axios';
import { LatLngTuple } from 'leaflet';
import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { WorkoutFormInitialValues } from '../modules/Workouts/components/WorkoutForm/Form.interfaces';

import { MONTHS_LIST } from '../modules/Workouts/Workouts.constants';
import { SortedWorkoutsByWorkoutTypeAndIndicator } from '../modules/Workouts/Workouts.enums';
import { weatherService } from '../services/Weather.service';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const WorkoutsContext = createContext({} as any);
/* eslint-disable @typescript-eslint/no-explicit-any */
export const WorkoutsProvider = (props: any) => {
  // preloader "state"
  const [preloader, setPreloader] = useState(false);
  // current location (geolocation) "state"
  const [location, setLocation] = useState<CurrentLocationData>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  // selected workout value from a from
  const [selectedValue, setSelectedValue] = useState('running');

  const [workouts, setWorkouts] = useLocalStorage<WorkoutItem[]>('workouts', []);
  const [sortedByWorkoutTypeValueAndIndicator, setSortedByWorkoutTypeValueAndIndicator] =
    useState<SortedWorkoutsByWorkoutTypeAndIndicator>(SortedWorkoutsByWorkoutTypeAndIndicator.Default);
  const [clickedMapCoordinates, setClickedMapCoordinates] = useState<LatLngTuple | null>(null);

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData | null>(null);

  useEffect(() => {
    async function getWorkoutWeather(): Promise<void> {
      const currentWeather = await weatherService.getCurrentWeather(location.coordinates.lat, location.coordinates.lng);

      setCurrentWeather(currentWeather);
    }
    getWorkoutWeather();
  }, [location.coordinates.lat, location.coordinates.lng]);

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
  const getWorkoutData = (formData: WorkoutFormInitialValues, mapCoords: LatLngTuple): void => {
    // workout data object(same for Running and Cycling) from workout form
    const workoutData: WorkoutItem = {
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
      coordinates: mapCoords,
      selectedValue: formData.workoutType ?? '',
      distance: formData.distance as number,
      duration: formData.duration as number,
      isFavorite: false,
    };

    setWorkouts([...new Set([...workouts, workoutData])]); // add newly created object from form to workouts array

    if (formData.workoutType === 'running') {
      setWorkouts([
        ...new Set([
          ...workouts,
          {
            ...workoutData,
            cadence: formData.cadence,
            pace: runningPace(formData.duration as number, formData.distance as number),
            description: workoutDescription(formData.workoutType, formData.distance as number),
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
            speed: cyclingSpeed(formData.duration as number, formData.distance as number),
            description: workoutDescription(formData.workoutType, formData.distance as number),
          },
        ]),
      ]);
    }
  };

  function deleteAllWorkouts(): void {
    setWorkouts([]);
    localStorage.removeItem('workouts');
  }

  function handleAddingToFavorites(workoutId: string) {
    const addedWorkoutToFavorite = workouts.map((workout: WorkoutItem) => {
      if (workout.id === workoutId) {
        workout.isFavorite = !workout.isFavorite;
      }
      return workout;
    });

    setWorkouts(addedWorkoutToFavorite);
  }

  return (
    <WorkoutsContext.Provider
      value={{
        loader: [preloader, setPreloader],
        currentLocation: [location, setLocation],
        select: [selectedValue, setSelectedValue],
        workoutsData: [workouts, setWorkouts],
        selectedWorkoutTypeValueAndIndicator: [
          sortedByWorkoutTypeValueAndIndicator,
          setSortedByWorkoutTypeValueAndIndicator,
        ],
        workoutRender: [getWorkoutData],
        description: [workoutDescription],
        clearWorkouts: [deleteAllWorkouts],
        addToFavorite: [handleAddingToFavorites],
        workoutCoordinates: [clickedMapCoordinates, setClickedMapCoordinates],
        currentWorkoutWeather: [currentWeather, setCurrentWeather],
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};
