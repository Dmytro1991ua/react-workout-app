import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { usePreventReloadHook } from '../../../cdk/hooks/usePreventReload';
import { useAppDispatch } from '../../../store/store.hooks';
import { authService } from '../../Auth/Auth.service';
import { updateUserDataAction } from '../../Auth/User.actions';
import { HookProps, ReturnedHookType } from '../Profile.interfaces';

export const useProfileFormState = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  currentUser,
}: HookProps<T>): ReturnedHookType<T> => {
  const dispatch = useAppDispatch();

  const [imageUpload, setImageUpload] = useState<File | Blob | Uint8Array | ArrayBuffer | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    reset,
  } = useForm<T>({
    mode: 'onChange',
    reValidateMode: 'onBlur',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const isWarningPopupShown = isDirty ?? false;

  usePreventReloadHook(isWarningPopupShown);

  const onUserImageUpload = useCallback(async (): Promise<void> => {
    try {
      imageUpload && (await authService.uploadFile(imageUpload, setUploadProgress));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }, [imageUpload]);

  useEffect(() => {
    onUserImageUpload();
  }, [onUserImageUpload]);

  async function onHandlePasswordChange(data: T): Promise<void> {
    try {
      await authService.changeUserPassword(data.currentPassword, data.newPassword);

      reset();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  function onHandleImageChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (!e.target.files) {
      return;
    }

    setImageUpload(e.target.files[0]);
  }

  async function onHandleUserInformationChange(data: T): Promise<void> {
    try {
      dispatch(updateUserDataAction({ name: data?.name ?? '', photoURL: currentUser?.photoURL ?? '' }));
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  return {
    errors,
    isDirty,
    isWarningPopupShown,
    uploadProgress,
    handleSubmit,
    register,
    onHandlePasswordChange,
    onHandleImageChange,
    onHandleUserInformationChange,
  };
};
