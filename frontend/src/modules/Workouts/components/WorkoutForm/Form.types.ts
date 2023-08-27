import { LatLngTuple } from 'leaflet';

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
