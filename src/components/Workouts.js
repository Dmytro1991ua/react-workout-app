import React from "react";
import {
  FeaturesTitle,
  WorkoutsFeatures,
  Map,
  WorkoutsSection,
  WorkoutsSectionBody,
} from "../styles/WorkoutsStyles";
import Form from "./Form";
import WorkoutsMap from "./WorkoutsMap";

const Workouts = () => {
  return (
    <WorkoutsSection>
      <WorkoutsSectionBody>
        <WorkoutsFeatures>
          <FeaturesTitle>Workouts Information</FeaturesTitle>
          <Form />
        </WorkoutsFeatures>
        <Map>
          <WorkoutsMap />
        </Map>
      </WorkoutsSectionBody>
    </WorkoutsSection>
  );
};

export default Workouts;
