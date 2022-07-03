import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BallTriangle } from 'react-loader-spinner';

import { AppRoutes } from '../../../../App.enums';
import Input from '../../../../components/Input/Input';
import { colors } from '../../../../global-styles/ColorsPalette';
import { LoginInitialValues } from '../../Auth.interfaces';
import { authService } from '../../Auth.service';
import { LOGIN_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { Form, FormBody, FormDetails, FormLink, FormSection, FormSectionTitle, FormSubmitBtn } from './Login.styled';

const LoginForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginInitialValues>({
    mode: 'onBlur',
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
  });

  const [isSignInViaGoogleLoading, setIsSignInViaGoogleLoading] = useState<boolean>(false);

  async function handleFormSubmit(formData: LoginInitialValues): Promise<void> {
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
                onClick={handleSubmit(handleFormSubmit)}
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
