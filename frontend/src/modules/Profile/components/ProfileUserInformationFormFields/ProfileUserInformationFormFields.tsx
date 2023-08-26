import React, { ReactElement } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { generateFormActionButtons, generateFormInputs } from '../../../../utils';
import { formActionButtonsConfig, USER_INFORMATION_FORM_INPUTS_CONFIG } from '../../Profile.configs';
import { ProfileUserInformationFormInitialValues } from '../../Profile.interfaces';
import { ProfileFormDetails, ProfileFormFieldsWrapper } from './ProfileUserInformationFormFields.styled';

interface ProfileFormFieldsProps {
  register: UseFormRegister<ProfileUserInformationFormInitialValues>;
  errors: FieldErrors<ProfileUserInformationFormInitialValues>;
  isDirty: boolean;
}

const ProfileUserInformationFormFields = ({ register, errors, isDirty }: ProfileFormFieldsProps): ReactElement => {
  const formInputs = generateFormInputs(USER_INFORMATION_FORM_INPUTS_CONFIG, register, errors);
  const renderedFormInputs = formInputs.map((input, index) => (
    <ProfileFormDetails key={`${index}_${input.key}`}>{input}</ProfileFormDetails>
  ));

  const actionButtonConfig = formActionButtonsConfig(!isDirty, false);
  const formActionButtons = generateFormActionButtons(actionButtonConfig);

  return (
    <ProfileFormFieldsWrapper>
      {renderedFormInputs}
      {formActionButtons}
    </ProfileFormFieldsWrapper>
  );
};

export default ProfileUserInformationFormFields;
