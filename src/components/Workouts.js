import React, { useContext } from "react";
import {
  FeaturesTitle,
  WorkoutsFeatures,
  Map,
  WorkoutsSection,
  WorkoutsSectionBody,
} from "../styles/WorkoutsStyles";
import { WorkoutsContext } from "../WorkoutsContext";

import Form from "./Form";
import Workout from "./Workout";
import WorkoutsMap from "./WorkoutsMap";

const Workouts = () => {
  // destructure certain "states" from Context
  const { form, workoutsData} = useContext(WorkoutsContext);
  const [showForm] = form;
  const [workouts] = workoutsData;
 

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures>
          <FeaturesTitle>Workouts Information</FeaturesTitle>
          {showForm && <Form />}
          {workouts.map((workout) => (
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
