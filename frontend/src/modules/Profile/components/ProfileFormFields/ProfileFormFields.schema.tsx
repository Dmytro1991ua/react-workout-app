import * as yup from 'yup';

import { ProfileSettingsFormInitialValues } from '../../Profile.interfaces';

export const PROFILE_SETTINGS_FORM_INITIAL_VALUES = (
  currentUser?: CurrentUser | null
): ProfileSettingsFormInitialValues => {
  return {
    picture: currentUser?.photoURL ?? '',
    email: currentUser?.email ?? '',
    name: currentUser?.name ?? '',
    // currentPassword: '',
    // newPassword: '',
    // confirmPassword: '',
  };
};

export const PROFILE_SETTINGS_FORM_VALIDATION_SCHEMA: yup.SchemaOf<ProfileSettingsFormInitialValues> = yup
  .object()
  .shape({
    picture: yup
      .mixed()
      .label('Picture')
      .test('fileSize', 'File size is too large', (value) => {
        return value.length && value[0].size <= 2000000;
      })
      .test(
        'fileType',
        'Unsupported File Format',
        (value) => value.length && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type)
      ),
    email: yup.string().label('Email').email().required(),
    name: yup.string().label('Name').required(),
    // currentPassword: yup.string().label('Current Password'),
    // newPassword: yup
    //   .string()
    //   .label('New Password')
    //   //.matches(/^\w{8}/, 'Password must be at least 8 characters')
    //   .matches(/[a-z]+/, 'One lowercase character')
    //   .matches(/[A-Z]+/, 'One uppercase character')
    //   .matches(/[@$!%*#?&]+/, 'One special character')
    //   .matches(/\d+/, 'One number')
    //   .test(
    //     'empty-or-8-characters-check',
    //     'Password must be at least 8 characters',
    //     (password) => !password || password.length >= 8
    //   ),
    // confirmPassword: yup
    //   .string()
    //   .label('Confirm Password')
    //   .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
  });
