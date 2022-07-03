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
