import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { authService } from '../../../Auth/Auth.service';
import { ProfileChangePasswordInitialValues } from '../../Profile.interfaces';
import {
  PROFILE_CHANGE_PASSWORD_FORM_INITIAL_VALUES,
  PROFILE_CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA,
} from '../../ProfileFormFields.schema';
import ProfileChangePasswordFormFields from '../ProfileChangePasswordFormFields/ProfileChangePasswordFormFields';
import { ProfileFormWrapper } from './../ProfileUserInformationForm/ProfileUserInformationForm.styled';

const ProfileChangePasswordForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: PROFILE_CHANGE_PASSWORD_FORM_INITIAL_VALUES,
    resolver: yupResolver(PROFILE_CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA),
  });

  async function handleFormSubmit(data: ProfileChangePasswordInitialValues): Promise<void> {
    try {
      await authService.changeUserPassword(data.currentPassword, data.newPassword);

      reset();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <ProfileChangePasswordFormFields errors={errors} register={register} isDirty={isDirty} />
    </ProfileFormWrapper>
  );
};

export default ProfileChangePasswordForm;
