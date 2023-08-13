import React, { ReactElement } from 'react';
import { Circles } from 'react-loader-spinner';

import Button from '../../../../components/Button/Button';
import { colors } from '../../../../global-styles/ColorsPalette';
import { ResetPasswordInitialValues } from '../../Auth.interfaces';
import { RESET_PASSWORD_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import { Form, FormBody, FormDetails, FormSection, FormSectionTitle } from '../LoginForm/Login.styled';
import Input from './../../../../components/Input/Input';

const ResetPasswordForm = (): ReactElement => {
  const { errors, register, isSubmitting, onResetPassword, handleSubmit } = useAuth<ResetPasswordInitialValues>({
    validationSchema: RESET_PASSWORD_VALIDATION_SCHEMA,
  });

  return (
    <FormSection>
      {isSubmitting ? (
        <Circles color={colors.mantis} height={150} width={150} />
      ) : (
        <>
          <FormSectionTitle>Reset Password</FormSectionTitle>
          <Form onSubmit={handleSubmit(onResetPassword)}>
            <FormBody>
              <FormDetails>
                <Input<ResetPasswordInitialValues>
                  type='password'
                  id='newPassword'
                  register={register}
                  errors={errors}
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
