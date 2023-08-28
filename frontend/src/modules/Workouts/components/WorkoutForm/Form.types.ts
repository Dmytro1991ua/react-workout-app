import { LatLngTuple } from 'leaflet';
import { FieldValues, Path } from 'react-hook-form';

import { FormInputConfig, FormSelectConfig } from '../../../../App.types';
import { WorkoutFormFieldLabel } from './WorkoutForm.enums';

export interface FormProps {
  onStopPropagation: (e: React.MouseEvent) => void;
  onCloseWorkoutForm: () => void;
  mapCoords: LatLngTuple | null;
  isFormShownOnWorkoutEdit: (value: boolean) => void;
  isFormShown: boolean;
  onIsSubmitted: (value: boolean) => void;
  editableWorkoutItemId: string | null;
  onEditableWorkoutItemId: (value: string | null) => void;
}

export interface WorkoutFormSelectConfig<T extends FieldValues> extends FormSelectConfig<T> {
  label?: WorkoutFormFieldLabel;
}

export interface WorkoutFormInputConfig<T extends FieldValues> extends FormInputConfig<T> {
  label?: WorkoutFormFieldLabel;
}
