import {
  DeepMap,
  DeepPartial,
  FieldError,
  FieldValues,
  Path,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

import { AppRoutes } from '../../App.enums';
import { FormHeaderLabel, FormLinkLabel } from './Auth.enums';

export type LoginInitialValues = {
  email: string;
  password: string;
};

export type SignUpInitialValues = {
  email: string;
  password: string;
  confirmedPassword: string;
};

export type ForgotPasswordInitialValues = {
  email: string;
};

export type ResetPasswordInitialValues = {
  newPassword: string;
};

export type HookProps = {
  validationSchema: AnyObjectSchema;
};

export type ReturnedHookType<T extends FieldValues> = {
  isSignInViaGoogleLoading: boolean;
  errors: DeepMap<DeepPartial<T>, FieldError>;
  isSubmitting: boolean;
  handleSubmit: UseFormHandleSubmit<T>;
  register: UseFormRegister<T>;
  onForgotPassword: (formData: ForgotPasswordInitialValues) => Promise<void>;
  onResetPassword: (formData: ResetPasswordInitialValues) => Promise<void>;
  onSignInViaGoogle: () => Promise<void>;
  onLoginWithCredentials: (formData: LoginInitialValues) => Promise<void>;
  onSignUpWithCredentials: (formData: SignUpInitialValues) => Promise<void>;
};

export type FormInputConfig<T extends FieldValues> = {
  type?: 'text' | 'number' | 'password' | 'email' | 'file';
  id: string;
  name: Path<T>;
  placeholder: string;
  isRequired?: boolean;
  borderColor?: keyof MainPalette;
  fullWidth?: boolean;
};

export type FormActinButtonConfig = {
  id?: FormHeaderLabel;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  backgroundColor?: keyof MainPalette;
  hoverColor?: keyof MainPalette;
  color?: keyof MainPalette;
  label?: FormHeaderLabel;
};

export type Pathname = {
  pathname: AppRoutes;
};

export type FormLinkConfig = {
  id: FormLinkLabel;
  to: Pathname;
  label: FormLinkLabel;
};
