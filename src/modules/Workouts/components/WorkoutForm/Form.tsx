import React, { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BallTriangle } from 'react-loader-spinner';

import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import Button from '../../../../components/Button/Button';
import { WORKOUT_FORM_VALIDATION_SCHEMA } from './FormValidations.schema';
import { Select } from '../../../../components/Select/Select';
import FormInput from '../FormInput/FormInput';

import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { FieldInputWrapper, FormLabel, FormRow, WorkoutForm } from './Form.styled';
import { colors } from '../../../../global-styles/ColorsPalette';
import { WORKOUT_TYPE_SELECTION_OPTIONS_MOCK } from '../../Workouts.constants';
import { LatLngTuple } from 'leaflet';

interface FormProps {
  onStopPropagation: (e: React.MouseEvent) => void;
  onCloseWorkoutForm: () => void;
  mapCoords: LatLngTuple | null;
}

const Form = ({ onStopPropagation, onCloseWorkoutForm, mapCoords }: FormProps) => {
  // destructure selected workout's value, workouts data "states"
  const { workoutRender, submit, workoutForm } = useContext(WorkoutsContext);

  const [getWorkoutData] = workoutRender;
  const [isSubmitted, setIsSubmitted] = submit;
  const [workoutFormValues, setWorkoutFormValues] = workoutForm;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setValue,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(WORKOUT_FORM_VALIDATION_SCHEMA),
  });

  const [selectedValue, setSelectedValue] = useState('running');

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setValue('workoutType', event.target.value);
    const getSelectFieldValue = getValues('workoutType');

    setSelectedValue(getSelectFieldValue);
  }

  function handleKeyDownOnInputField(event: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>): boolean {
    return ['e', 'E', '+', '-'].includes(event.key);
  }

  const handleWorkoutFormSubmit = (formData: FieldValues): void => {
    getWorkoutData(formData, mapCoords); //get workout data from form based on a select value

    setWorkoutFormValues({
      ...formData,
      workoutType: selectedValue,
    });

    reset();

    setIsSubmitted(true);
    onCloseWorkoutForm(); // hide Form component onSubmit a form
  };

  return (
    <>
      <FormAndFallbackMessageWrapper onClick={onStopPropagation}>
        {isSubmitting ? (
          <BallTriangle color={colors.mantis} height={100} width={100} />
        ) : (
          <WorkoutForm>
            <FormRow>
              <FormLabel>Type</FormLabel>
              <Select
                options={WORKOUT_TYPE_SELECTION_OPTIONS_MOCK}
                name='workoutType'
                id='workoutType'
                register={register}
                error={errors.workoutType}
                onChange={handleSelectChange}
              />
            </FormRow>
            <FormRow>
              <FormLabel>Distance</FormLabel>
              <FieldInputWrapper>
                <FormInput
                  placeholder='km'
                  name='distance'
                  id='distance'
                  type='number'
                  min={0}
                  max={10000}
                  register={register}
                  error={errors.distance}
                  onKeyDown={handleKeyDownOnInputField}
                  isRequired
                />
              </FieldInputWrapper>
            </FormRow>
            <FormRow>
              <FormLabel>Duration</FormLabel>
              <FieldInputWrapper>
                <FormInput
                  placeholder='min'
                  name='duration'
                  id='duration'
                  min={0}
                  max={10000}
                  type='number'
                  register={register}
                  onKeyDown={handleKeyDownOnInputField}
                  error={errors.duration}
                  isRequired
                />
              </FieldInputWrapper>
            </FormRow>
            <FormRow>
              {/* Render either "Cadence" or 'Elevation Gain' based on selected value */}
              <>
                {selectedValue === 'running' && (
                  <>
                    <FormLabel>Cadence</FormLabel>
                    <FormInput
                      name='cadence'
                      id='cadence'
                      type='number'
                      min={0}
                      max={10000}
                      onKeyDown={handleKeyDownOnInputField}
                      register={register}
                      error={errors.cadence}
                      placeholder='step/min'
                    />
                  </>
                )}
                {selectedValue === 'cycling' && (
                  <>
                    <FormLabel>Elev Gain</FormLabel>
                    <FormInput
                      name='elevationGain'
                      id='elevationGainData'
                      type='number'
                      min={0}
                      max={10000}
                      onKeyDown={handleKeyDownOnInputField}
                      register={register}
                      error={errors.cadence}
                      placeholder='meters'
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
                onClick={handleSubmit(handleWorkoutFormSubmit)}
              >
                Add Workout
              </Button>
            </FormRow>
          </WorkoutForm>
        )}
      </FormAndFallbackMessageWrapper>
    </>
  );
};

export default Form;
