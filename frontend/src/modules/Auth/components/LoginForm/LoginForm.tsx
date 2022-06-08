import React, { ReactElement, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { BallTriangle } from 'react-loader-spinner';

import { AppRoutes } from '../../../../App.enums';
import Input from '../../../../components/Input/Input';
import { authService } from '../../Auth.service';
import { LOGIN_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { FormSection, FormSectionTitle, FormDetails, FormBody, FormLink, Form, FormSubmitBtn } from './Login.styled';
import { colors } from '../../../../global-styles/ColorsPalette';

const LoginForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
  });

  const [isSignInViaGoogleLoading, setIsSignInViaGoogleLoading] = useState<boolean>(false);

  async function handleFromSubmit(formData: FieldValues): Promise<void> {
    const { email, password } = formData;

    await authService.login(email, password);

    reset();
  }

  async function handleSignInViaGoogle(): Promise<void> {
    try {
      setIsSignInViaGoogleLoading(true);
      await authService.signInViaGoogle();
      setIsSignInViaGoogleLoading(false);
    } catch (error) {
      return;
    }
  }

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
                <Input
                  type='email'
                  id='email'
                  register={register}
                  error={errors.email}
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
                  error={errors.password}
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
                onClick={handleSubmit(handleFromSubmit)}
              >
                Sign In
              </FormSubmitBtn>
              <FormSubmitBtn
                type='submit'
                fullWidth
                backgroundColor='white'
                hoverColor='lighterBlue'
                color='mantis'
                onClick={handleSignInViaGoogle}
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
