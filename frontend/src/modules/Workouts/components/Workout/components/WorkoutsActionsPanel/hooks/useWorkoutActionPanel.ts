import { useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../../../store/store.hooks';
import { deleteAllWorkoutsAction } from '../../../../../Workouts.actions';
import { SortedWorkoutsSelectOption } from '../../../../../Workouts.enums';
import { selectSortedWorkoutsSelectOption, setSortedWorkoutsSelectOption } from '../../../../../Workouts.slice';
import { removeEmojiAndSpaceFromSelectedValue } from '../WorkoutsActionsPanel.utils';

type ReturnedHookType = {
  isSortedDefaultOptionDisabled: boolean;
  selectedValue: SortedWorkoutsSelectOption;
  isDeleteConfirmationModalOpened: boolean;
  onSortingByWorkoutTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onResetWorkoutSorting: () => void;
  onDeleteAllWorkouts: () => void;
  onOpenDeleteConfirmationModal: () => void;
  onCloseDeleteConfirmationModal: () => void;
};

export const useWorkoutActionPanel = (): ReturnedHookType => {
  const dispatch = useAppDispatch();

  const sortedWorkoutsSelectOption = useAppSelector(selectSortedWorkoutsSelectOption);

  const [isSortedDefaultOptionDisabled, setIsSortedDefaultOptionDisabled] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<SortedWorkoutsSelectOption>(sortedWorkoutsSelectOption);
  const [isDeleteConfirmationModalOpened, setIsDeleteConfirmationModalOpened] = useState<boolean>(false);

  const onSortingByWorkoutTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = removeEmojiAndSpaceFromSelectedValue(event.target.value);

      dispatch(setSortedWorkoutsSelectOption(selectedValue as SortedWorkoutsSelectOption));

      setIsSortedDefaultOptionDisabled(true);
      setSelectedValue(event.target.value as SortedWorkoutsSelectOption);
    },
    [dispatch]
  );

  const onResetWorkoutSorting = useCallback((): void => {
    dispatch(setSortedWorkoutsSelectOption(SortedWorkoutsSelectOption.Default));

    setIsSortedDefaultOptionDisabled(false);
    setSelectedValue(SortedWorkoutsSelectOption.Default);
  }, [dispatch]);

  const onDeleteAllWorkouts = useCallback((): void => {
    dispatch(deleteAllWorkoutsAction());
    dispatch(setSortedWorkoutsSelectOption(SortedWorkoutsSelectOption.Default));
  }, [dispatch]);

  const onOpenDeleteConfirmationModal = useCallback((): void => {
    setIsDeleteConfirmationModalOpened(true);
  }, []);

  const onCloseDeleteConfirmationModal = useCallback((): void => {
    setIsDeleteConfirmationModalOpened(false);
  }, []);

  return {
    isSortedDefaultOptionDisabled,
    selectedValue,
    isDeleteConfirmationModalOpened,
    onSortingByWorkoutTypeChange,
    onResetWorkoutSorting,
    onDeleteAllWorkouts,
    onOpenDeleteConfirmationModal,
    onCloseDeleteConfirmationModal,
  };
};
