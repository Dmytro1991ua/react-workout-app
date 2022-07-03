import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactElement, useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../../../store/store.hooks';
import { authService } from '../../../Auth/Auth.service';
import { updateUserDataAction } from '../../../Auth/User.actions';
import { selectCurrentUser } from '../../../Auth/User.slice';
import ProfileFormFields from '../ProfileFormFields/ProfileFormFields';
import {
  PROFILE_SETTINGS_FORM_INITIAL_VALUES,
  PROFILE_SETTINGS_FORM_VALIDATION_SCHEMA,
} from '../ProfileFormFields/ProfileFormFields.schema';
import ProfileImage from '../ProfileImage/ProfileImage';
import { ProfileFormWrapper } from './ProfileInformationForm.styled';

const ProfileInformationForm = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const [imageUpload, setImageUpload] = useState<File | Blob | Uint8Array | ArrayBuffer | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: PROFILE_SETTINGS_FORM_INITIAL_VALUES(currentUser),
    resolver: yupResolver(PROFILE_SETTINGS_FORM_VALIDATION_SCHEMA),
  });

  useEffect(() => {
    uploadUserImage();
  }, [imageUpload]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>): void {
    if (!e.target.files) {
      return;
    }

    setImageUpload(e.target.files[0]);
  }

  async function uploadUserImage(): Promise<void> {
    try {
      imageUpload && (await authService.uploadFile(imageUpload, setUploadProgress));
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async function handleFormSubmit(data: FieldValues): Promise<void> {
    try {
      dispatch(updateUserDataAction({ name: data?.name, photoURL: currentUser?.photoURL as string }));
    } catch (err) {
      throw new Error((err as Error).message);
    }
  }

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <ProfileImage
        register={register}
        errors={errors}
        onHandleImageChange={handleImageChange}
        uploadProgress={uploadProgress}
      />
      <ProfileFormFields errors={errors} register={register} isEditMode={Boolean(currentUser)} isDirty={isDirty} />
    </ProfileFormWrapper>
  );
};

export default ProfileInformationForm;
