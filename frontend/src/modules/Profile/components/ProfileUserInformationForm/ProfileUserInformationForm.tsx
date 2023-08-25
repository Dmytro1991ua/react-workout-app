import React, { ReactElement } from 'react';

import { useAppSelector } from '../../../../store/store.hooks';
import { selectCurrentUser } from '../../../Auth/User.slice';
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
      <ProfileImage
        register={register}
        errors={errors}
        onHandleImageChange={onHandleImageChange}
        uploadProgress={uploadProgress}
      />
      <ProfileFormFields errors={errors} register={register} isEditMode={Boolean(currentUser)} isDirty={isDirty} />
    </ProfileFormWrapper>
  );
};

export default ProfileUserInformationForm;
