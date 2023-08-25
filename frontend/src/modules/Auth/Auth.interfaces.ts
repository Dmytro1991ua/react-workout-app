import { DeepMap, DeepPartial, FieldError, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

import { AppRoutes } from '../../App.enums';
import { FormLinkLabel } from './Auth.enums';

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
  onForgotPassword: (formData: T) => Promise<void>;
  onResetPassword: (formData: T) => Promise<void>;
  onSignInViaGoogle: () => Promise<void>;
  onLoginWithCredentials: (formData: T) => Promise<void>;
  onSignUpWithCredentials: (formData: T) => Promise<void>;
};

export type Pathname = {
  pathname: AppRoutes;
};

export type FormLinkConfig = {
  id: FormLinkLabel;
  to: Pathname;
  label: FormLinkLabel;
};
