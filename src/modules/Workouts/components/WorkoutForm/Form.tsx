import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BallTriangle } from 'react-loader-spinner';

import { WorkoutsContext } from '../../../../context/WorkoutsContext';
import Button from '../../../../components/Button/Button';
import { WORKOUT_FORM_INITIAL_VALUES, WORKOUT_FORM_VALIDATION_SCHEMA } from './FormValidations.schema';
import { Select } from '../../../../components/Select/Select';
import FormInput from '../FormInput/FormInput';

import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { FieldInputWrapper, FormLabel, FormRow, WorkoutForm } from './Form.styled';
import { colors } from '../../../../global-styles/ColorsPalette';
import { WORKOUT_TYPE_SELECTION_OPTIONS_MOCK } from '../../Workouts.constants';
import { LatLngTuple } from 'leaflet';
import { WorkoutFormInitialValues, WorkoutType } from './Form.interfaces';

interface FormProps {
  onStopPropagation: (e: React.MouseEvent) => void;
  onCloseWorkoutForm: () => void;
  mapCoords: LatLngTuple | null;
  isFormShownOnWorkoutEdit: (value: boolean) => void;
  editableWorkoutItem: WorkoutItem | null;
  isFormShown: boolean;
}

const Form = ({
  onStopPropagation,
  onCloseWorkoutForm,
  mapCoords,
  isFormShownOnWorkoutEdit,
  editableWorkoutItem,
  isFormShown,
}: FormProps) => {
  // destructure selected workout's value, workouts data "states"
  const { workoutRender, submit, workoutsData } = useContext(WorkoutsContext);

  const [getWorkoutData] = workoutRender;
  const [isSubmitted, setIsSubmitted] = submit;
  const [workouts, setWorkouts] = workoutsData;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setValue,
  } = useForm<WorkoutFormInitialValues>({
    mode: 'all',
    defaultValues: WORKOUT_FORM_INITIAL_VALUES(editableWorkoutItem),
    resolver: yupResolver(WORKOUT_FORM_VALIDATION_SCHEMA),
  });

  const [selectedValue, setSelectedValue] = useState('');

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    setValue('workoutType', event.target.value as WorkoutType);
    const getSelectFieldValue = getValues('workoutType');

    setSelectedValue(getSelectFieldValue as WorkoutType);
  }

  function handleKeyDownOnInputField(event: React.KeyboardEvent<HTMLFormElement | HTMLInputElement>): boolean {
    return ['e', 'E', '+', '-'].includes(event.key);
  }

  function updateWorkout(formData: WorkoutFormInitialValues) {
    const updateWorkoutData = workouts.map((workout: WorkoutItem) =>
      workout.id === editableWorkoutItem?.id
        ? {
            ...workout,
            distance: formData.distance,
            duration: formData.duration,
            elevationGain: formData.elevationGain,
            cadence: formData.cadence,
          }
        : workout
    );

    setWorkouts(updateWorkoutData);
  }

  function handleWorkoutFormSubmit(formData: WorkoutFormInitialValues): void {
    getWorkoutData(formData, mapCoords); //get workout data from form based on a select value

    if (editableWorkoutItem) {
      updateWorkout(formData);
    }

    reset();

    setIsSubmitted(true);
    onCloseWorkoutForm(); // hide Form component onSubmit a form
    isFormShownOnWorkoutEdit(false);
  }

  return (
    <>
      <FormAndFallbackMessageWrapper onClick={onStopPropagation}>
        {isSubmitting ? (
          <BallTriangle color={colors.mantis} height={100} width={100} />
        ) : (
          <WorkoutForm>
            <FormRow>
              <FormLabel>Type</FormLabel>
              <Select<WorkoutFormInitialValues>
                options={WORKOUT_TYPE_SELECTION_OPTIONS_MOCK}
                name='workoutType'
                id='workoutType'
                register={register}
                errors={errors}
                onChange={handleSelectChange}
                optionLabel='Select workout type:'
                disabled={!!editableWorkoutItem?.selectedValue}
              />
            </FormRow>
            <FormRow>
              <FormLabel>Distance</FormLabel>
              <FieldInputWrapper>
                <FormInput<WorkoutFormInitialValues>
                  placeholder='km'
                  name='distance'
                  id='distance'
                  type='number'
                  min={0}
                  max={10000}
                  register={register}
                  errors={errors}
                  onKeyDown={handleKeyDownOnInputField}
                  isRequired
                  disabled={isFormShown && selectedValue === ''}
                />
              </FieldInputWrapper>
            </FormRow>
            <FormRow>
              <FormLabel>Duration</FormLabel>
              <FieldInputWrapper>
                <FormInput<WorkoutFormInitialValues>
                  placeholder='min'
                  name='duration'
                  id='duration'
                  min={0}
                  max={10000}
                  type='number'
                  register={register}
                  onKeyDown={handleKeyDownOnInputField}
                  errors={errors}
                  isRequired
                  disabled={isFormShown && selectedValue === ''}
                />
              </FieldInputWrapper>
            </FormRow>
            <FormRow>
              {/* Render either "Cadence" or 'Elevation Gain' based on selected value */}
              <>
                {(selectedValue || editableWorkoutItem?.selectedValue) === 'running' && (
                  <>
                    <FormLabel>Cadence</FormLabel>
                    <FormInput<WorkoutFormInitialValues>
                      name='cadence'
                      id='cadence'
                      type='number'
                      min={0}
                      max={10000}
                      onKeyDown={handleKeyDownOnInputField}
                      register={register}
                      errors={errors}
                      placeholder='step/min'
                    />
                  </>
                )}
                {(selectedValue || editableWorkoutItem?.selectedValue) === 'cycling' && (
                  <>
                    <FormLabel>Elev Gain</FormLabel>
                    <FormInput<WorkoutFormInitialValues>
                      name='elevationGain'
                      id='elevationGainData'
                      type='number'
                      min={0}
                      max={10000}
                      onKeyDown={handleKeyDownOnInputField}
                      register={register}
                      errors={errors}
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
                disabled={isFormShown && selectedValue === ''}
              >
                {editableWorkoutItem ? 'Edit workout' : 'Add Workout'}
              </Button>
            </FormRow>
          </WorkoutForm>
        )}
      </FormAndFallbackMessageWrapper>
    </>
  );
};

export default Form;
