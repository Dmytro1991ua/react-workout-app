import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';

import React, { ReactElement} from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Prompt } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import { Select } from '../../../../components/Select/Select';
import { colors } from '../../../../global-styles/ColorsPalette';
import { useAppSelector } from '../../../../store/store.hooks';
import { handleKeyDownOnInputField } from '../../../../utils';
import { selectWeatherDetailsBasedWorkoutCoordinates } from '../../../WeatherDetails/WeatherDetails.slice';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { WARNING_POPUP_CONTENT, WORKOUT_TYPE_SELECTION_OPTIONS } from '../../Workouts.constants';
import { selectUpdatedWorkout, selectWorkouts, } from '../../Workouts.slice';
import FormInput from '../FormInput/FormInput';
import { WorkoutFormInitialValues} from './Form.interfaces';
import { CloseBtn, FieldInputWrapper, FormLabel, FormRow, WorkoutForm } from './Form.styled';
import { FormProps } from './Form.types';
import { useWorkoutForm } from './hooks/useWorkoutForm';

const Form = ({
  onStopPropagation,
  onCloseWorkoutForm,
  mapCoords,
  isFormShownOnWorkoutEdit,
  isFormShown,
  onIsSubmitted,
  editableWorkoutItemId,
  onEditableWorkoutItemId,
}: FormProps): ReactElement => {
  const availableWorkouts = useAppSelector(selectWorkouts);
  const editableWorkoutItem = useAppSelector(selectUpdatedWorkout(editableWorkoutItemId));
  const weatherBasedOnWorkoutCoordinates = useAppSelector(selectWeatherDetailsBasedWorkoutCoordinates);

  const {
    errors,
    handleSubmit,
    isSubmitting,
    isWarningPopupShown,
    onSelectChange,
    onWorkoutFormSubmit,
    register,
    selectedValue,
  } = useWorkoutForm({
    editableWorkoutItem,
    availableWorkouts,
    weatherBasedOnWorkoutCoordinates,
    isFormShownOnWorkoutEdit,
    onCloseWorkoutForm,
    mapCoords,
    onEditableWorkoutItemId,
    onIsSubmitted,
  });

  return (
    <>
      <FormAndFallbackMessageWrapper onClick={onStopPropagation} $isQuizFallbackMessage={false}>
        {isSubmitting ? (
          <BallTriangle color={colors.mantis} height={100} width={100} />
        ) : (
          <WorkoutForm>
            <Prompt when={isWarningPopupShown} message={WARNING_POPUP_CONTENT} />
            <CloseBtn onClick={onCloseWorkoutForm} />
            <FormRow>
              <FormLabel>Type</FormLabel>
              <Select<WorkoutFormInitialValues>
                options={WORKOUT_TYPE_SELECTION_OPTIONS}
                name='workoutType'
                id='workoutType'
                register={register}
                errors={errors}
                onChange={onSelectChange}
                fullWidth
                optionLabel='Select workout type:'
                disabled={Boolean(editableWorkoutItem?.selectedValue)}
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
                  onKeyDown={handleKeyDownOnInputField}
                  errors={errors}
                  isRequired
                  fullWidth
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
                  fullWidth
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
                      fullWidth
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
                      fullWidth
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
                onClick={handleSubmit(onWorkoutFormSubmit)}
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
