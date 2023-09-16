import * as yup from 'yup';

import { ProfileChangePasswordInitialValues, ProfileUserInformationFormInitialValues } from './Profile.interfaces';

export const PROFILE_USER_INFORMATION_FORM_INITIAL_VALUES = (
  currentUser?: CurrentUser | null
): ProfileUserInformationFormInitialValues => {
  return {
    picture: currentUser?.photoURL ?? '',
    email: currentUser?.email ?? '',
    name: currentUser?.name ?? '',
  };
};

export const PROFILE_CHANGE_PASSWORD_FORM_INITIAL_VALUES: ProfileChangePasswordInitialValues = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

export const PROFILE_USER_INFORMATION_FORM_VALIDATION_SCHEMA: yup.SchemaOf<ProfileUserInformationFormInitialValues> =
  yup.object().shape(
    {
      picture: yup
        .mixed()
        .label('Picture')
        .when('picture', (value) => {
          if (!value || typeof value === 'string') {
            return yup.mixed().notRequired();
          }

          return yup
            .mixed()
            .test('fileSize', 'The file is too large', (value) => {
              return value && value[0] && value[0].size <= 200000;
            })
            .test('type', 'Unsupported image format', function (value) {
              return value && value[0] && ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type);
            });
        }),
      email: yup.string().label('Email').email().required(),
      name: yup.string().label('Name').required(),
    },
    [['picture', 'picture']]
  );

export const PROFILE_CHANGE_PASSWORD_FORM_VALIDATION_SCHEMA: yup.SchemaOf<ProfileChangePasswordInitialValues> = yup
  .object()
  .shape({
    currentPassword: yup.string().label('Current Password').required(),
    newPassword: yup
      .string()
      .label('New Password')
      .required()
      .matches(/[a-z]+/, 'One lowercase character')
      .matches(/[A-Z]+/, 'One uppercase character')
      .matches(/[@$!%*#?&]+/, 'One special character')
      .matches(/\d+/, 'One number')
      .test(
        'empty-or-8-characters-check',
        'Password must be at least 8 characters',
        (password) => !password || password.length >= 8
      ),
    confirmPassword: yup
      .string()
      .label('Confirm Password')
      .required()
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
  });
