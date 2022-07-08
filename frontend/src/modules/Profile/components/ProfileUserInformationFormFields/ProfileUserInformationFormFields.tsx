import React, { ReactElement } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { ProfileUserInformationFormInitialValues } from '../../Profile.interfaces';
import { ProfileFormDetails, ProfileFormFieldsWrapper } from './ProfileUserInformationFormFields.styled';

interface ProfileFormFieldsProps {
  register: UseFormRegister<ProfileUserInformationFormInitialValues>;
  errors: FieldErrors<ProfileUserInformationFormInitialValues>;
  isEditMode: boolean;
  isDirty: boolean;
}

const ProfileUserInformationFormFields = ({
  register,
  errors,
  isEditMode,
  isDirty,
}: ProfileFormFieldsProps): ReactElement => {
  return (
    <ProfileFormFieldsWrapper>
      <ProfileFormDetails>
        <Input<ProfileUserInformationFormInitialValues>
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
        <Input<ProfileUserInformationFormInitialValues>
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

export default ProfileUserInformationFormFields;
