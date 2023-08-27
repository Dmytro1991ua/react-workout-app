import { yupResolver } from '@hookform/resolvers/yup';
import { LatLngTuple } from 'leaflet';
import { find as _find } from 'lodash';
import { useState } from 'react';
import { useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { usePreventReloadHook } from '../../../../../cdk/hooks/usePreventReload';
import { useAppDispatch } from '../../../../../store/store.hooks';
import { updateWorkoutAction } from '../../../Workouts.actions';
import { setWorkouts } from '../../../Workouts.slice';
import { createWorkoutItem } from '../../../Workouts.utils';
import { FormFieldErrors, WorkoutFormInitialValues, WorkoutType } from '../Form.interfaces';
import { FormProps } from '../Form.types';
import { WORKOUT_FORM_INITIAL_VALUES, WORKOUT_FORM_VALIDATION_SCHEMA } from '../FormValidations.schema';

type HoopProps = Omit<FormProps, 'isFormShown' | 'onStopPropagation' | 'editableWorkoutItemId'> & {
  availableWorkouts: WorkoutItem[];
  editableWorkoutItem: WorkoutItem | null;
  weatherBasedOnWorkoutCoordinates: CurrentWeatherData | null;
};

type ReturnedHookType = {
  handleSubmit: UseFormHandleSubmit<WorkoutFormInitialValues>;
  register: UseFormRegister<WorkoutFormInitialValues>;
  errors: FormFieldErrors;
  isSubmitting: boolean;
  isWarningPopupShown: boolean;
  selectedValue: string;
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onWorkoutFormSubmit: (formData: WorkoutFormInitialValues) => void;
};

export const useWorkoutForm = ({
  editableWorkoutItem,
  availableWorkouts,
  weatherBasedOnWorkoutCoordinates,
  isFormShownOnWorkoutEdit,
  mapCoords,
  onCloseWorkoutForm,
  onEditableWorkoutItemId,
  onIsSubmitted,
}: HoopProps): ReturnedHookType => {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty },
    reset,
    getValues,
    setValue,
  } = useForm<WorkoutFormInitialValues>({
    mode: 'all',
    defaultValues: WORKOUT_FORM_INITIAL_VALUES(editableWorkoutItem),
    resolver: yupResolver(WORKOUT_FORM_VALIDATION_SCHEMA),
  });

  const isWarningPopupShown = isDirty ?? false;

  usePreventReloadHook(isWarningPopupShown);

  const [selectedValue, setSelectedValue] = useState<string>('');

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setValue('workoutType', event.target.value as WorkoutType);
    const getSelectFieldValue = getValues('workoutType');

    setSelectedValue(getSelectFieldValue as WorkoutType);
  };

  const onUpdateWorkouts = (formData: WorkoutFormInitialValues): WorkoutItem[] => {
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
  };

  const updateWorkout = (formData: WorkoutFormInitialValues) => {
    const updatedWorkouts = onUpdateWorkouts(formData);
    const updatedWorkoutById = _find(updatedWorkouts, (workout) => workout._id === editableWorkoutItem?._id);

    if (updatedWorkoutById) {
      dispatch(updateWorkoutAction(editableWorkoutItem?._id as string, updatedWorkoutById));
    }
  };

  const createNewWorkout = (formData: WorkoutFormInitialValues) => {
    createWorkoutItem(formData, mapCoords as LatLngTuple, weatherBasedOnWorkoutCoordinates);
  };

  const resetAndCleanup = () => {
    reset();
    onIsSubmitted(true);
    onCloseWorkoutForm();
    isFormShownOnWorkoutEdit(false);
    onEditableWorkoutItemId(null);
  };

  const onWorkoutFormSubmit = (formData: WorkoutFormInitialValues): void => {
    if (editableWorkoutItem) {
      updateWorkout(formData);
    } else {
      createNewWorkout(formData);
    }

    resetAndCleanup();
  };

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    isWarningPopupShown,
    selectedValue,
    onSelectChange,
    onWorkoutFormSubmit,
  };
};
