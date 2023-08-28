import React, { ReactElement } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { generateFormActionButtons, generateFormInputs } from '../../../../utils';
import { CHANGE_PASSWORD_FORM_INPUTS_CONFIG, formActionButtonsConfig } from '../../Profile.configs';
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
  const formInputs = generateFormInputs({ config: CHANGE_PASSWORD_FORM_INPUTS_CONFIG, register, errors });
  const renderedFormInputs = formInputs.map((input, index) => (
    <ProfileFormDetails key={`${index}_${input.key}`}>{input}</ProfileFormDetails>
  ));

  const actionButtonConfig = formActionButtonsConfig(!isDirty, true);
  const formActionButtons = generateFormActionButtons(actionButtonConfig);

  return (
    <ProfileFormFieldsWrapper>
      {renderedFormInputs}
      {formActionButtons}
    </ProfileFormFieldsWrapper>
  );
};

export default ProfileChangePasswordFormFields;
