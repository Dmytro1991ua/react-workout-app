import React, { ReactElement } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { ProfileChangePasswordInitialValues } from '../../Profile.interfaces';
import {
  ProfileFormDetails,
  ProfileFormFieldsWrapper,
} from '../ProfileUserInformationFormFields/ProfileUserInformationFormFields.styled';

interface ProfileChangePasswordFormFieldsProps {
  register: UseFormRegister<ProfileChangePasswordInitialValues>;
  errors: FieldErrors<ProfileChangePasswordInitialValues>;
  isDirty: boolean;
}

const ProfileChangePasswordFormFields = ({
  register,
  errors,
  isDirty,
}: ProfileChangePasswordFormFieldsProps): ReactElement => {
  return (
    <ProfileFormFieldsWrapper>
      <ProfileFormDetails>
        <Input<ProfileChangePasswordInitialValues>
          type='password'
          id='currentPassword'
          register={register}
          errors={errors}
          name='currentPassword'
          placeholder='Current Password'
          isRequired
          borderColor='mantis'
          fullWidth
        />
      </ProfileFormDetails>
      <ProfileFormDetails>
        <Input<ProfileChangePasswordInitialValues>
          type='password'
          id='newPassword'
          register={register}
          errors={errors}
          name='newPassword'
          placeholder='New Password'
          isRequired
          borderColor='mantis'
          fullWidth
        />
      </ProfileFormDetails>
      <ProfileFormDetails>
        <Input<ProfileChangePasswordInitialValues>
          type='password'
          id='confirmPassword'
          register={register}
          errors={errors}
          name='confirmPassword'
          placeholder='Confirm Password'
          isRequired
          borderColor='mantis'
          fullWidth
        />
      </ProfileFormDetails>
      <Button
        fullWidth
        backgroundColor='darkBlue'
        hoverColor='mantisDarker'
        color='white'
        type='submit'
        disabled={!isDirty}
      >
        Submit
      </Button>
    </ProfileFormFieldsWrapper>
  );
};

export default ProfileChangePasswordFormFields;
