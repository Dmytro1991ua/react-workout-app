import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Audio } from 'react-loader-spinner';

import { AppRoutes } from '../../../../App.enums';
import { colors } from '../../../../global-styles/ColorsPalette';
import { SignUpInitialValues } from '../../Auth.interfaces';
import { authService } from '../../Auth.service';
import { SIGN_UP_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { Form, FormDetails, FormSection, FormSectionTitle, FormSubmitBtn } from '../LoginForm/Login.styled';
import Input from './../../../../components/Input/Input';
import { SignUpBody, SignUpLink } from './SignUp.styled';

const SignUp = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignUpInitialValues>({
    mode: 'onBlur',
    resolver: yupResolver(SIGN_UP_VALIDATION_SCHEMA),
  });

  const [isSignInViaGoogleLoading, setIsSignInViaGoogleLoading] = useState<boolean>(false);

  async function handleSignUpSubmit(formData: SignUpInitialValues): Promise<void> {
    const { email, password } = formData;

    await authService.signUp(email, password);

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
        <Audio color={colors.mantis} height={150} width={150} />
      ) : (
        <>
          <FormSectionTitle>Sign Up</FormSectionTitle>
          <Form>
            <SignUpBody>
              <FormDetails>
                <Input<SignUpInitialValues>
                  type='email'
                  name='email'
                  register={register}
                  errors={errors}
                  id='email'
                  placeholder='Email*'
                  isRequired
                  borderColor='lighterBlue'
                  fullWidth
                />
              </FormDetails>
              <FormDetails>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  register={register}
                  errors={errors}
                  placeholder='Password*'
                  isRequired
                  borderColor='lighterBlue'
                  fullWidth
                />
              </FormDetails>
              <FormDetails>
                <Input
                  type='password'
                  id='confirm-password'
                  placeholder='Confirm Password*'
                  name='confirmedPassword'
                  register={register}
                  errors={errors}
                  isRequired
                  borderColor='lighterBlue'
                  fullWidth
                />
              </FormDetails>
              <FormSubmitBtn
                type='submit'
                fullWidth
                backgroundColor='lighterBlue'
                hoverColor='mantisDarker'
                color='white'
                onClick={handleSubmit(handleSignUpSubmit)}
              >
                Sign Up
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
              <SignUpLink to={{ pathname: AppRoutes.Login }}>Already have an account?</SignUpLink>
            </SignUpBody>
          </Form>
        </>
      )}
    </FormSection>
  );
};

export default SignUp;
