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
  // destructure selected workout's value "state"
  const { select } = useContext(WorkoutsContext);
  const [selectedValue, setSelectedValue] = select;

  // workout form's releated "states"
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [cadence, setCadence] = useState("");
  const [elevationGain, setElevationGain] = useState("");

  const handleOnChange = (event) => {
    setSelectedValue(event.target.value);
    // setDistance(event.target.value);
    // setDuration(event.target.value);
    // setCadence(event.target.value);
    // setElevationGain(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log([distance, duration, cadence, elevationGain]);
  };

  return (
    <FormSection onSubmit={handleSubmit}>
      <FormRow>
        <FormLabel>Type</FormLabel>
        <FormSelect onChange={handleOnChange} value={selectedValue}>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>Distance</FormLabel>
        <FormInput
          value={distance}
          placeholder="km"
          onChange={(event) => setDistance(event.target.value)}
        />
      </FormRow>
      <FormRow>
        <FormLabel>Duration</FormLabel>
        <FormInput
          value={duration}
          placeholder="min"
          onChange={(event) => setDuration(event.target.value)}
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
                onChange={(event) => setCadence(event.target.value)}
              />
            </>
          )}
          {selectedValue === "cycling" && (
            <>
              {" "}
              <FormLabel>Elev Gain</FormLabel>
              <FormInput
                value={elevationGain}
                placeholder="meters"
                onChange={(event) => setElevationGain(event.target.value)}
              />{" "}
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
