import { DeepMap, DeepPartial, FieldError, FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

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
