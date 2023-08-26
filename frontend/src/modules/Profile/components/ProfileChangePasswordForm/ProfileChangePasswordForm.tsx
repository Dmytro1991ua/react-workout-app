import React, { ReactElement } from 'react';
import { Prompt } from 'react-router-dom';

import { WARNING_POPUP_CONTENT } from '../../../Workouts/Workouts.constants';
import { useProfileFormState } from '../../hooks/useProfileFormState';
import { ProfileChangePasswordInitialValues } from '../../Profile.interfaces';
import {
  PROFILE_CHANGE_PASSWORD_FORM_INITIAL_VALUES,
  PROFILE_CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA,
} from '../../ProfileFormFields.schema';
import ProfileChangePasswordFormFields from '../ProfileChangePasswordFormFields/ProfileChangePasswordFormFields';
import { ProfileFormWrapper } from './../ProfileUserInformationForm/ProfileUserInformationForm.styled';

const ProfileChangePasswordForm = (): ReactElement => {
  const { errors, isDirty, isWarningPopupShown, handleSubmit, onHandlePasswordChange, register } =
    useProfileFormState<ProfileChangePasswordInitialValues>({
      defaultValues: PROFILE_CHANGE_PASSWORD_FORM_INITIAL_VALUES,
      validationSchema: PROFILE_CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA,
    });

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(onHandlePasswordChange)}>
      <Prompt when={isWarningPopupShown} message={WARNING_POPUP_CONTENT} />
      <ProfileChangePasswordFormFields errors={errors} register={register} isDirty={isDirty} />
    </ProfileFormWrapper>
  );
};

export default ProfileChangePasswordForm;
