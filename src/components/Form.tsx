import React, { useContext } from 'react';

import { FormButton, FormInput, FormLabel, FormRow, FormSection, FormSelect } from '../styles/FormStyles.styled';
import { WorkoutsContext } from '../WorkoutsContext';

import 'leaflet/dist/leaflet.css';
import '../leafletMap/LeafletStyles.css';

const Form = () => {
  // destructure selected workout's value, workouts data "states"
  const { select, distanceData, durationData, cadenceData, elevationGainData, workoutRender, form, submit } =
    useContext(WorkoutsContext);

  const [selectedValue, setSelectedValue] = select;
  const [distance, setDistance] = distanceData;
  const [duration, setDuration] = durationData;
  const [cadence, setCadence] = cadenceData;
  const [elevationGain, setElevationGain] = elevationGainData;
  const [getWorkoutData] = workoutRender;
  const [showForm, setShowForm] = form;
  const [isSubmitted, setIsSubmitted] = submit;

  const handleSubmit = (event) => {
    event.preventDefault();

    getWorkoutData(selectedValue); //get workout data from form based on a select value

    setDistance('');
    setDuration('');
    setCadence('');
    setElevationGain('');

    setShowForm(false); // hide Form component onSubmit a form
    setIsSubmitted(true);
  };

  return (
    <>
      <FormSection onSubmit={handleSubmit}>
        <FormRow>
          <FormLabel>Type</FormLabel>
          <FormSelect onChange={(event) => setSelectedValue(event.target.value)} required value={selectedValue}>
            <option value='running'>Running</option>
            <option value='cycling'>Cycling</option>
          </FormSelect>
        </FormRow>
        <FormRow>
          <FormLabel>Distance</FormLabel>
          <FormInput
            value={distance}
            placeholder='km'
            onChange={(event) => setDistance(parseInt(event.target.value) || '')}
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel>Duration</FormLabel>
          <FormInput
            value={duration}
            placeholder='min'
            onChange={(event) => setDuration(parseInt(event.target.value) || '')}
            required
          />
        </FormRow>
        <FormRow>
          {/* Render either "Cadence" or 'Elevation Gain' based on selected value */}
          <>
            {selectedValue === 'running' && (
              <>
                <FormLabel>Cadence</FormLabel>
                <FormInput
                  value={cadence}
                  placeholder='step/min'
                  onChange={(event) => setCadence(parseInt(event.target.value) || '')}
                  required
                />
              </>
            )}
            {selectedValue === 'cycling' && (
              <>
                <FormLabel>Elev Gain</FormLabel>
                <FormInput
                  value={elevationGain}
                  placeholder='meters'
                  onChange={(event) => setElevationGain(parseInt(event.target.value) || '')}
                  required
                />
              </>
            )}
          </>
        </FormRow>
        <FormRow>
          <FormButton>Add workout</FormButton>
        </FormRow>
      </FormSection>
    </>
  );
};

export default Form;
