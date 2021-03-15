import React, { useContext, useState } from "react";
import {
  FormButton,
  FormInput,
  FormLabel,
  FormRow,
  FormSection,
  FormSelect,
} from "../styles/FormStyles";
import { WorkoutsContext } from "../WorkoutsContext";

const Form = () => {
  // destructure selected workout's value, workouts data "states"
  const {
    select,
    distanceData,
    durationData,
    cadenceData,
    elevationGainData,
    workoutsData,
    workoutRender,
    form,
  } = useContext(WorkoutsContext);

  const [selectedValue, setSelectedValue] = select;
  const [workouts, setWorkouts] = workoutsData;
  const [distance, setDistance] = distanceData;
  const [duration, setDuration] = durationData;
  const [cadence, setCadence] = cadenceData;
  const [elevationGain, setElevationGain] = elevationGainData;
  const [getWorkoutData] = workoutRender;
  const [showForm, setShowForm] = form;

  // // workout form's releated "states"
  // const [distance, setDistance] = useState("");
  // const [duration, setDuration] = useState("");
  // const [cadence, setCadence] = useState("");
  // const [elevationGain, setElevationGain] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    getWorkoutData(selectedValue); //get workout data from form based on a select value

    setDistance("");
    setDuration("");
    setCadence("");
    setElevationGain("");
    setSelectedValue("running");
    setShowForm(!showForm); // hide Form component onSubmit a form
  };

  return (
    <FormSection onSubmit={handleSubmit}>
      <FormRow>
        <FormLabel>Type</FormLabel>
        <FormSelect
          onChange={(event) => setSelectedValue(event.target.value)}
          value={selectedValue}
        >
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>Distance</FormLabel>
        <FormInput
          value={distance}
          placeholder="km"
          onChange={(event) => setDistance(Number(event.target.value))}
        />
      </FormRow>
      <FormRow>
        <FormLabel>Duration</FormLabel>
        <FormInput
          value={duration}
          placeholder="min"
          onChange={(event) => setDuration(Number(event.target.value))}
        />
      </FormRow>
      <FormRow>
        {/* Render either "Cadence" or 'Elevation Gain' based on selected value */}
        <>
          {selectedValue === "running" && (
            <>
              <FormLabel>Cadence</FormLabel>
              <FormInput
                value={cadence}
                placeholder="step/min"
                onChange={(event) => setCadence(Number(event.target.value))}
              />
            </>
          )}
          {selectedValue === "cycling" && (
            <>
              <FormLabel>Elev Gain</FormLabel>
              <FormInput
                value={elevationGain}
                placeholder="meters"
                onChange={(event) =>
                  setElevationGain(Number(event.target.value))
                }
              />
            </>
          )}
        </>
      </FormRow>
      <FormRow>
        <FormButton>Add workout</FormButton>
      </FormRow>
    </FormSection>
  );
};

export default Form;
