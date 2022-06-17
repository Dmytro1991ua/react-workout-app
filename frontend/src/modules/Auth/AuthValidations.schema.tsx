import * as yup from 'yup';

import {
  ForgotPasswordInitialValues,
  LoginInitialValues,
  ResetPasswordInitialValues,
  SignUpInitialValues,
} from './Auth.interfaces';

export const LOGIN_FORM_INITIAL_VALUES: LoginInitialValues = {
  email: '',
  password: '',
};

export const SIGN_UP_FORM_INITIAL_VALUES: SignUpInitialValues = {
  email: '',
  password: '',
  confirmedPassword: '',
};

export const FORGOT_PASSWORD_INITIAL_VALUES: ForgotPasswordInitialValues = {
  email: '',
};

export const RESET_PASSWORD_INITIAL_VALUES: ResetPasswordInitialValues = {
  newPassword: '',
};

export const LOGIN_VALIDATION_SCHEMA: yup.SchemaOf<LoginInitialValues> = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  password: yup.string().label('Password').required().min(8, 'Should be at least 8 characters'),
});

export const SIGN_UP_VALIDATION_SCHEMA: yup.SchemaOf<LoginInitialValues> = yup.object().shape({
  email: yup.string().label('Email').email().required(),
  password: yup
    .string()
    .label('Password')
    .required()
    .min(8, 'Should be at least 8 characters')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
  confirmedPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const FORGOT_PASSWORD_VALIDATION_SCHEMA: yup.SchemaOf<ForgotPasswordInitialValues> = yup.object().shape({
  email: yup.string().label('Email').email().required(),
});

export const RESET_PASSWORD_VALIDATION_SCHEMA: yup.SchemaOf<ResetPasswordInitialValues> = yup.object().shape({
  newPassword: yup
    .string()
    .label('Password')
    .required()
    .min(8, 'Should be at least 8 characters')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number'),
});
