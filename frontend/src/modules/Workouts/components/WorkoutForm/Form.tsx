import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BallTriangle } from 'react-loader-spinner';

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
import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { selectUpdatedWorkout, selectWorkouts, setWorkouts } from '../../Workouts.slice';
import { createWorkoutItem } from '../../Workouts.utils';
import { selectWeatherDetailsBasedWorkoutCoordinates } from '../../../WeatherDetails/WeatherDetails.slice';
import { updateWorkoutAction } from './../../Workouts.actions';
import { find } from 'lodash';

interface FormProps {
  onStopPropagation: (e: React.MouseEvent) => void;
  onCloseWorkoutForm: () => void;
  mapCoords: LatLngTuple | null;
  isFormShownOnWorkoutEdit: (value: boolean) => void;
  isFormShown: boolean;
  setIsSubmitted: (value: boolean) => void;
  editableWorkoutItemId: string | null;
  setEditableWorkoutItemId: (value: string | null) => void;
}

const Form = ({
  onStopPropagation,
  onCloseWorkoutForm,
  mapCoords,
  isFormShownOnWorkoutEdit,
  isFormShown,
  setIsSubmitted,
  editableWorkoutItemId,
  setEditableWorkoutItemId,
}: FormProps) => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const editableWorkoutItem = useAppSelector(selectUpdatedWorkout(editableWorkoutItemId));
  const dispatch = useAppDispatch();

  const weatherBasedOnWorkoutCoordinates = useAppSelector(selectWeatherDetailsBasedWorkoutCoordinates);

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

  function handleUpdateWorkouts(formData: WorkoutFormInitialValues): WorkoutItem[] {
    const updatedWorkouts = availableWorkouts.map((workout: WorkoutItem) => {
      return workout._id === editableWorkoutItem?._id
        ? {
            ...workout,
            distance: formData.distance as number,
            duration: formData.duration as number,
            elevationGain: formData.elevationGain,
            cadence: formData.cadence,
          }
        : workout;
    });

    dispatch(setWorkouts(updatedWorkouts));

    return updatedWorkouts;
  }

  function handleWorkoutFormSubmit(formData: WorkoutFormInitialValues): void {
    if (editableWorkoutItem) {
      const updatedWorkouts = handleUpdateWorkouts(formData);
      const updatedWorkoutById = find(updatedWorkouts, (workout) => workout._id === editableWorkoutItem?._id);

      if (updatedWorkoutById) {
        dispatch(updateWorkoutAction(editableWorkoutItem._id!, updatedWorkoutById));
      }
    } else {
      createWorkoutItem(formData, mapCoords as LatLngTuple, weatherBasedOnWorkoutCoordinates);
    }

    reset();

    setIsSubmitted(true);
    onCloseWorkoutForm(); // hide Form component onSubmit a form
    isFormShownOnWorkoutEdit(false);
    setEditableWorkoutItemId(null);
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
                disabled={isFormShown && selectedValue === ''}>
                {editableWorkoutItemId ? 'Edit workout' : 'Add Workout'}
              </Button>
            </FormRow>
          </WorkoutForm>
        )}
      </FormAndFallbackMessageWrapper>
    </>
  );
};

export default Form;
