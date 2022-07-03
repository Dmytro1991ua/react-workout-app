import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import { ProfileSettingsFormInitialValues } from '../../Profile.interfaces';
import Input from './../../../../components/Input/Input';
import { ProfileFormDetails, ProfileFormFieldsWrapper } from './ProfileFormFields.styled';

interface ProfileFormFieldsProps {
  register: UseFormRegister<ProfileSettingsFormInitialValues>;
  errors: FieldErrors<FieldValues>;
  isEditMode: boolean;
  isDirty: boolean;
}

const ProfileFormFields = ({ register, errors, isEditMode, isDirty }: ProfileFormFieldsProps): ReactElement => {
  return (
    <ProfileFormFieldsWrapper>
      <ProfileFormDetails>
        <Input<ProfileSettingsFormInitialValues>
          type='email'
          id='email'
          register={register}
          errors={errors}
          name='email'
          placeholder='Email'
          isRequired
          borderColor='mantis'
          fullWidth
          disabled={isEditMode}
        />
      </ProfileFormDetails>
      <ProfileFormDetails>
        <Input<ProfileSettingsFormInitialValues>
          type='text'
          id='name'
          register={register}
          errors={errors}
          name='name'
          placeholder='Name'
          isRequired
          borderColor='mantis'
          fullWidth
        />
      </ProfileFormDetails>
      {/* <ProfileFormDetails>
        <Input<ProfileSettingsFormInitialValues>
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
        <Input<ProfileSettingsFormInitialValues>
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
        <Input<ProfileSettingsFormInitialValues>
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
      </ProfileFormDetails> */}
      <Button
        fullWidth
        backgroundColor='mantisDarker'
        hoverColor='mantis'
        color='white'
        type='submit'
        disabled={!isDirty}
      >
        Submit
      </Button>
    </ProfileFormFieldsWrapper>
  );
};

export default ProfileFormFields;
