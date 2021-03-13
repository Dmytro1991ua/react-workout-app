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
import WorkoutsMap from "./WorkoutsMap";

const Workouts = () => {
  //destructure workout form related "state"
  const { form } = useContext(WorkoutsContext);
  const [showForm, setShowForm] = form;

  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures>
          <FeaturesTitle>Workouts Information</FeaturesTitle>
          {showForm && <Form />}
        </WorkoutsFeatures>
        <Map>
          <WorkoutsMap />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
