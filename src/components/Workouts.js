import React, { useContext } from 'react';

import { FeaturesTitle, Map, WorkoutsFeatures, WorkoutsSection, WorkoutsSectionBody } from '../styles/WorkoutsStyles';
import { WorkoutsContext } from '../WorkoutsContext';
import Form from './Form';
import Workout from './Workout';
import WorkoutsMap from './WorkoutsMap';

const Workouts = () => {
  // destructure certain "states" from Context
  const { form, workoutsData } = useContext(WorkoutsContext);
  const [showForm] = form;
  const [workouts] = workoutsData;

  // sort out a workouts array with object in order to display last added object to an array as a first in a list
  const sortedWorkouts = workouts.sort((obj1, obj2) => obj2.id - obj1.id);

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures>
          <FeaturesTitle>Workouts Information</FeaturesTitle>
          {showForm && <Form />}
          {sortedWorkouts.map((workout) => (
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
