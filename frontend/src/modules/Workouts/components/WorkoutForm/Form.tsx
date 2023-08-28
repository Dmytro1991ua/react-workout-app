import 'leaflet/dist/leaflet.css';
import '../../../leafletMap/leaflet.css';

import React, { ReactElement } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { Prompt } from 'react-router-dom';

import { colors } from '../../../../global-styles/ColorsPalette';
import { useAppSelector } from '../../../../store/store.hooks';
import { generateFormActionButtons, generateFormInputs, generateFormSelects } from '../../../../utils';
import { selectWeatherDetailsBasedWorkoutCoordinates } from '../../../WeatherDetails/WeatherDetails.slice';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { WARNING_POPUP_CONTENT } from '../../Workouts.constants';
import { selectUpdatedWorkout, selectWorkouts } from '../../Workouts.slice';
import { WorkoutFormInitialValues } from './Form.interfaces';
import { CloseBtn, FormRow, WorkoutForm } from './Form.styled';
import { FormProps } from './Form.types';
import { useWorkoutForm } from './hooks/useWorkoutForm';
import { workoutFormActionButtonConfig, workoutFormInputConfig, workoutFormSelectConfig } from './WorkoutForm.configs';

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

  const isDisabled = isFormShown && selectedValue === '';
  const isCadenceInput = (selectedValue || editableWorkoutItem?.selectedValue) === 'running';
  const isElevationInput = (selectedValue || editableWorkoutItem?.selectedValue) === 'cycling';

  const formSelectsConfig = workoutFormSelectConfig(Boolean(editableWorkoutItem?.selectedValue), onSelectChange);
  const formSelects = generateFormSelects<WorkoutFormInitialValues>({
    config: formSelectsConfig,
    isWorkoutForm: true,
    register,
    errors,
  });

  const formInputsConfig = workoutFormInputConfig({
    isDisabled,
    isCadenceInput,
    isElevationInput,
  });
  const formInputs = generateFormInputs<WorkoutFormInitialValues>({
    config: formInputsConfig,
    errors,
    isWorkoutForm: true,
    register,
  });

  const formActionButtonsConfig = workoutFormActionButtonConfig({
    editableWorkoutItemId,
    isDisabled,
    onClick: handleSubmit(onWorkoutFormSubmit),
  });
  const formActionButtons = generateFormActionButtons(formActionButtonsConfig);

  return (
    <>
      <FormAndFallbackMessageWrapper onClick={onStopPropagation} $isQuizFallbackMessage={false}>
        {isSubmitting ? (
          <BallTriangle color={colors.mantis} height={100} width={100} />
        ) : (
          <WorkoutForm>
            <Prompt when={isWarningPopupShown} message={WARNING_POPUP_CONTENT} />
            <CloseBtn onClick={onCloseWorkoutForm} />
            {formSelects}
            {formInputs}
            <FormRow>{formActionButtons}</FormRow>
          </WorkoutForm>
        )}
      </FormAndFallbackMessageWrapper>
    </>
  );
};

export default Form;
