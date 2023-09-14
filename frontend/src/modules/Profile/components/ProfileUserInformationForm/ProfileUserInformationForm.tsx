import React, { ReactElement } from 'react';
import { Prompt } from 'react-router-dom';

import { useAppSelector } from '../../../../store/store.hooks';
import { selectCurrentUser } from '../../../Auth/User.slice';
import { WARNING_POPUP_CONTENT } from '../../../Workouts/Workouts.constants';
import { useProfileFormState } from '../../hooks/useProfileFormState';
import { ProfileUserInformationFormInitialValues } from '../../Profile.interfaces';
import {
  PROFILE_USER_INFORMATION_FORM_INITIAL_VALUES,
  PROFILE_USER_INFORMATION_FORM_VALIDATION_SCHEMA,
} from '../../ProfileFormFields.schema';
import ProfileImage from '../ProfileImage/ProfileImage';
import ProfileFormFields from '../ProfileUserInformationFormFields/ProfileUserInformationFormFields';
import { ProfileFormWrapper } from './ProfileUserInformationForm.styled';

const ProfileUserInformationForm = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);

  const {
    errors,
    isDirty,
    isWarningPopupShown,
    uploadProgress,
    handleSubmit,
    onHandleUserInformationChange,
    register,
    onHandleImageChange,
  } = useProfileFormState<ProfileUserInformationFormInitialValues>({
    defaultValues: PROFILE_USER_INFORMATION_FORM_INITIAL_VALUES(currentUser),
    validationSchema: PROFILE_USER_INFORMATION_FORM_VALIDATION_SCHEMA,
    currentUser,
  });

  return (
    <ProfileFormWrapper onSubmit={handleSubmit(onHandleUserInformationChange)}>
      <Prompt when={isWarningPopupShown} message={WARNING_POPUP_CONTENT} />
      <ProfileImage
        register={register}
        errors={errors}
        onHandleImageChange={onHandleImageChange}
        uploadProgress={uploadProgress}
      />
      <ProfileFormFields errors={errors} register={register} isDirty={isDirty} />
    </ProfileFormWrapper>
  );
};

export default ProfileUserInformationForm;
