import { FormActionButtonConfig, FormInputConfig } from '../../App.types';
import { FormHeaderLabel } from '../Auth/Auth.enums';
import { ProfileChangePasswordInitialValues, ProfileUserInformationFormInitialValues } from './Profile.interfaces';

export const CHANGE_PASSWORD_FORM_INPUTS_CONFIG: FormInputConfig<ProfileChangePasswordInitialValues>[] = [
  {
    id: 'currentPassword',
    name: 'currentPassword',
    type: 'password',
    fullWidth: true,
    placeholder: 'Current Password',
    isRequired: true,
    borderColor: 'mantis',
  },
  {
    id: 'newPassword',
    name: 'newPassword',
    type: 'password',
    fullWidth: true,
    placeholder: 'New Password',
    isRequired: true,
    borderColor: 'mantis',
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    type: 'password',
    fullWidth: true,
    placeholder: 'Confirm Password',
    isRequired: true,
    borderColor: 'mantis',
  },
];

export const USER_INFORMATION_FORM_INPUTS_CONFIG: FormInputConfig<ProfileUserInformationFormInitialValues>[] = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    fullWidth: true,
    placeholder: 'Email',
    isRequired: true,
    borderColor: 'mantis',
    disabled: true,
  },
  {
    id: 'name',
    name: 'name',
    type: 'text',
    fullWidth: true,
    placeholder: 'Name',
    isRequired: true,
    borderColor: 'mantis',
  },
];

export const formActionButtonsConfig = (
  disabled: boolean,
  isChangePasswordForm?: boolean
): FormActionButtonConfig[] => {
  return [
    {
      id: FormHeaderLabel.Submit,
      label: FormHeaderLabel.Submit,
      type: 'submit',
      fullWidth: true,
      backgroundColor: isChangePasswordForm ? 'darkBlue' : 'mantisDarker',
      hoverColor: isChangePasswordForm ? 'mantisDarker' : 'mantis',
      color: 'white',
      disabled,
    },
  ];
};
