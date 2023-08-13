import React, { ReactElement } from 'react';
import { BallTriangle } from 'react-loader-spinner';

import { AppRoutes } from '../../../../App.enums';
import Input from '../../../../components/Input/Input';
import { colors } from '../../../../global-styles/ColorsPalette';
import { LoginInitialValues } from '../../Auth.interfaces';
import { LOGIN_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import { Form, FormBody, FormDetails, FormLink, FormSection, FormSectionTitle, FormSubmitBtn } from './Login.styled';

const LoginForm = (): ReactElement => {
  const {
    errors,
    register,
    isSubmitting,
    isSignInViaGoogleLoading,
    onLoginWithCredentials,
    onSignInViaGoogle,
    handleSubmit,
  } = useAuth<LoginInitialValues>({
    validationSchema: LOGIN_VALIDATION_SCHEMA,
  });

  return (
    <FormSection>
      {isSubmitting || isSignInViaGoogleLoading ? (
        <BallTriangle color={colors.mantis} height={150} width={150} />
      ) : (
        <>
          <FormSectionTitle>Log In</FormSectionTitle>
          <Form>
            <FormBody>
              <FormDetails>
                <Input<LoginInitialValues>
                  type='email'
                  id='email'
                  register={register}
                  errors={errors}
                  name='email'
                  placeholder='Email*'
                  isRequired
                  borderColor='mantis'
                  fullWidth
                />
              </FormDetails>
              <FormDetails>
                <Input
                  type='password'
                  id='password'
                  register={register}
                  errors={errors}
                  name='password'
                  placeholder='Password*'
                  isRequired
                  borderColor='mantis'
                  fullWidth
                />
              </FormDetails>
              <FormSubmitBtn
                type='submit'
                fullWidth
                backgroundColor='mantisDarker'
                hoverColor='mantis'
                color='white'
                onClick={handleSubmit(onLoginWithCredentials)}
              >
                Sign In
              </FormSubmitBtn>
              <FormSubmitBtn
                type='submit'
                fullWidth
                backgroundColor='white'
                hoverColor='lighterBlue'
                color='mantis'
                onClick={onSignInViaGoogle}
              >
                Sign In via Google
              </FormSubmitBtn>
              <FormLink to={{ pathname: AppRoutes.SignUp }}>Don&apos;t have an account?</FormLink>
              <FormLink to={{ pathname: AppRoutes.ForgotPassword }}>Forgot a password?</FormLink>
            </FormBody>
          </Form>
        </>
      )}
    </FormSection>
  );
};

export default LoginForm;
