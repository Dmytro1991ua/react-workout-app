import { AppRoutes } from '../../App.enums';
import { FormActionButtonConfig, FormInputConfig } from '../../App.types';
import { FormHeaderLabel, FormLinkLabel } from './Auth.enums';
import {
  ForgotPasswordInitialValues,
  FormLinkConfig,
  LoginInitialValues,
  ResetPasswordInitialValues,
  SignUpInitialValues,
} from './Auth.interfaces';

export const LOGIN_FORM_INPUTS_CONFIG: FormInputConfig<LoginInitialValues>[] = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    fullWidth: true,
    placeholder: 'Email*',
    isRequired: true,
    borderColor: 'mantis',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    fullWidth: true,
    placeholder: 'Password*',
    isRequired: true,
    borderColor: 'mantis',
  },
];

export const FORGOT_PASSWORD_FORM_INPUTS_CONFIGS: FormInputConfig<ForgotPasswordInitialValues>[] = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    fullWidth: true,
    placeholder: 'Email*',
    isRequired: true,
    borderColor: 'mantis',
  },
];

export const RESET_PASSWORD_FORM_INPUTS_CONFIGS: FormInputConfig<ResetPasswordInitialValues>[] = [
  {
    id: 'newPassword',
    name: 'newPassword',
    type: 'password',
    fullWidth: true,
    placeholder: 'New Password*',
    isRequired: true,
    borderColor: 'lighterBlue',
  },
];

export const SIGN_UP_FORMS_INPUT_CONFIG: FormInputConfig<SignUpInitialValues>[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    fullWidth: true,
    placeholder: 'Name*',
    isRequired: false,
    borderColor: 'lighterBlue',
  },
  ...LOGIN_FORM_INPUTS_CONFIG.map((input) => ({
    ...input,
    borderColor: 'lighterBlue' as keyof MainPalette,
  })),
  {
    id: 'confirmedPassword',
    name: 'confirmedPassword',
    type: 'password',
    fullWidth: true,
    placeholder: 'Confirm Password*',
    isRequired: false,
    borderColor: 'lighterBlue',
  },
];

const commonPrimaryButtonConfig: FormActionButtonConfig = {
  type: 'submit',
  fullWidth: true,
  backgroundColor: 'mantis',
  hoverColor: 'mantisDarker',
  color: 'white',
};

const commonSecondaryButtonConfig: FormActionButtonConfig = {
  type: 'submit',
  fullWidth: true,
  backgroundColor: 'white',
  hoverColor: 'lighterBlue',
  color: 'mantis',
};

export const FORM_ACTION_BUTTONS_CONFIG: FormActionButtonConfig[] = [
  { ...commonPrimaryButtonConfig, label: FormHeaderLabel.Submit, id: FormHeaderLabel.Submit },
  { ...commonPrimaryButtonConfig, label: FormHeaderLabel.ResetPassword, id: FormHeaderLabel.ResetPassword },
  {
    ...commonPrimaryButtonConfig,
    label: FormHeaderLabel.SignIn,
    id: FormHeaderLabel.SignIn,
  },
  {
    ...commonPrimaryButtonConfig,
    label: FormHeaderLabel.SignUp,
    backgroundColor: 'white',
    hoverColor: 'lighterBlue',
    color: 'mantis',
    id: FormHeaderLabel.SignUp,
  },
  {
    ...commonSecondaryButtonConfig,
    label: FormHeaderLabel.SignInViaGoogle,
    id: FormHeaderLabel.SignInViaGoogle,
  },
  {
    ...commonSecondaryButtonConfig,
    label: FormHeaderLabel.SignUpViaGoogle,
    id: FormHeaderLabel.SignUpViaGoogle,
  },
];

export const FORM_LINKS_CONFIG: FormLinkConfig[] = [
  {
    id: FormLinkLabel.ForgetPasswordLink,
    to: { pathname: AppRoutes.ForgotPassword },
    label: FormLinkLabel.ForgetPasswordLink,
  },
  {
    id: FormLinkLabel.LoginLink,
    to: { pathname: AppRoutes.Login },
    label: FormLinkLabel.LoginLink,
  },
  {
    id: FormLinkLabel.SignUpLink,
    to: { pathname: AppRoutes.SignUp },
    label: FormLinkLabel.SignUpLink,
  },
];
