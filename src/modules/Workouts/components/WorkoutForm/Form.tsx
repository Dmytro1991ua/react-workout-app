import React, { useContext } from 'react';

import { FormInput, FormLabel, FormRow, FormSection, FormSelect } from './Form.styled';
import { WorkoutsContext } from '../../../../context/WorkoutsContext';

import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';
import Button from '../../../../components/Button/Button';

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

  function handleInputChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setSelectedValue(event.target.value);
  }

  const handleSubmit = () => {
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
          <FormSelect onChange={handleInputChange} required value={selectedValue}>
            <option value='running'>Running</option>
            <option value='cycling'>Cycling</option>
          </FormSelect>
        </FormRow>
        <FormRow>
          <FormLabel>Distance</FormLabel>
          <FormInput
            value={distance}
            placeholder='km'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDistance(parseInt(event.target.value) || '')}
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel>Duration</FormLabel>
          <FormInput
            value={duration}
            placeholder='min'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDuration(parseInt(event.target.value) || '')}
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
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setCadence(parseInt(event.target.value) || '')
                  }
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
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setElevationGain(parseInt(event.target.value) || '')
                  }
                  required
                />
              </>
            )}
          </>
        </FormRow>
        <FormRow>
          <Button
            type='submit'
            fullWidth
            backgroundColor='mantis'
            hoverColor='mantisDarker'
            color='white'
            onClick={handleSubmit}
          >
            Add Workout
          </Button>
        </FormRow>
      </FormSection>
    </>
  );
};

export default Form;
