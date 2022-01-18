import React, { ReactElement, useContext } from 'react';

import {
  FeaturesTitle,
  WorkoutsFeatures,
  Map,
  WorkoutsSection,
  WorkoutsSectionBody,
} from '../styles/WorkoutsStyles.styled';
import { WorkoutsContext } from '../WorkoutsContext';
import Form from './Form';
import Workout from './Workout';
import WorkoutsMap from './WorkoutsMap';

const Workouts = (): ReactElement => {
  // destructure certain "states" from Context
  const { form, workoutsData } = useContext(WorkoutsContext);
  const [showForm] = form;
  const [workouts] = workoutsData;

  console.warn(workouts);

  // sort out a workouts array with object in order to display last added object to an array as a first in a list
  const sortedWorkouts = workouts.sort((obj1: any, obj2: any) => obj2.id - obj1.id);

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures>
          <FeaturesTitle>Workouts Information</FeaturesTitle>
          {showForm && <Form />}
          {sortedWorkouts.map((workout: any) => (
            <Workout key={workout.id} workout={workout} />
          ))}
        </WorkoutsFeatures>
        <Map>
          <WorkoutsMap />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
