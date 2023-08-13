import React, { ReactElement } from 'react';
import { Audio } from 'react-loader-spinner';

import { AppRoutes } from '../../../../App.enums';
import { colors } from '../../../../global-styles/ColorsPalette';
import { SignUpInitialValues } from '../../Auth.interfaces';
import { SIGN_UP_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import { Form, FormDetails, FormSection, FormSectionTitle, FormSubmitBtn } from '../LoginForm/Login.styled';
import Input from './../../../../components/Input/Input';
import { SignUpBody, SignUpLink } from './SignUp.styled';

const SignUp = (): ReactElement => {
  const {
    errors,
    register,
    isSubmitting,
    isSignInViaGoogleLoading,
    onSignUpWithCredentials,
    onSignInViaGoogle,
    handleSubmit,
  } = useAuth<SignUpInitialValues>({
    validationSchema: SIGN_UP_VALIDATION_SCHEMA,
  });

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
                onClick={handleSubmit(onSignUpWithCredentials)}
              >
                Sign Up
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
              <SignUpLink to={{ pathname: AppRoutes.Login }}>Already have an account?</SignUpLink>
            </SignUpBody>
          </Form>
        </>
      )}
    </FormSection>
  );
};

export default SignUp;
