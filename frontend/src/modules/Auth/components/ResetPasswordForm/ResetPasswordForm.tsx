import React, { ReactElement } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Circles } from 'react-loader-spinner';

import Button from '../../../../components/Button/Button';
import { FormDetails, FormSection, Form, FormBody, FormSectionTitle } from '../LoginForm/Login.styled';
import Input from './../../../../components/Input/Input';
import { RESET_PASSWORD_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useQueryParams } from '../../../../hooks/useQueryParams';
import { authService } from '../../Auth.service';
import { colors } from '../../../../global-styles/ColorsPalette';

const ResetPasswordForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(RESET_PASSWORD_VALIDATION_SCHEMA),
  });

  const queryParams = useQueryParams();

  async function handleForgotPasswordFormSubmit(formData: FieldValues): Promise<void> {
    const { newPassword } = formData;

    const getOobCodeFromUrl = queryParams.get('oobCode');

    if (getOobCodeFromUrl) {
      await authService.resetPassword(getOobCodeFromUrl, newPassword);
    }

    reset();
  }

  return (
    <FormSection>
      {isSubmitting ? (
        <Circles color={colors.mantis} height={150} width={150} />
      ) : (
        <>
          <FormSectionTitle>Reset Password</FormSectionTitle>
          <Form onSubmit={handleSubmit(handleForgotPasswordFormSubmit)}>
            <FormBody>
              <FormDetails>
                <Input
                  type='password'
                  id='newPassword'
                  register={register}
                  error={errors.newPassword}
                  name='newPassword'
                  placeholder='New Password*'
                  isRequired
                  borderColor='lighterBlue'
                  fullWidth
                />
              </FormDetails>
              <Button type='submit' fullWidth backgroundColor='mantis' hoverColor='mantisDarker' color='white'>
                Reset Password
              </Button>
            </FormBody>
          </Form>
        </>
      )}
    </FormSection>
  );
};

export default ResetPasswordForm;