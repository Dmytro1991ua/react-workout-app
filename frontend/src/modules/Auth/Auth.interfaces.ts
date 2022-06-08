export interface LoginInitialValues {
  email: string;
  password: string;
}

export interface SignUpInitialValues extends LoginInitialValues {
  confirmedPassword: string;
}

export interface ForgotPasswordInitialValues {
  email: string;
}

export interface ResetPasswordInitialValues {
  newPassword: string;
}
