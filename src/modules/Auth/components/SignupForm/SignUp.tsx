import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppRoutes } from '../../../../App.enums';
import Button from '../../../../components/Button/Button';
import { authService } from '../../Auth.service';
import { FormSection, FormDetails, Form, FormSectionTitle } from '../LoginForm/Login.styled';
import { SignUpBody, SignUpLink } from './SignUp.styled';
import Input from './../../../../components/Input/Input';
import { SIGN_UP_VALIDATION_SCHEMA } from '../../AuthValidations.schema';

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SIGN_UP_VALIDATION_SCHEMA),
  });

  async function handleSignUpSubmit(formData: FieldValues): Promise<void> {
    const { email, password } = formData;

    await authService.signUp(email, password);

    reset();
  }

  return (
    <FormSection>
      <FormSectionTitle>Sign Up</FormSectionTitle>
      <Form onSubmit={handleSubmit(handleSignUpSubmit)}>
        <SignUpBody>
          <FormDetails>
            <Input
              type='email'
              name='email'
              register={register}
              error={errors.email}
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
              error={errors.password}
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
              error={errors.confirmedPassword}
              isRequired
              borderColor='lighterBlue'
              fullWidth
            />
          </FormDetails>
          <Button type='submit' fullWidth backgroundColor='lighterBlue' hoverColor='mantisDarker' color='white'>
            Sign Up
          </Button>
          <SignUpLink to={{ pathname: AppRoutes.Login }}>Already have an account?</SignUpLink>
        </SignUpBody>
      </Form>
    </FormSection>
  );
};

export default SignUp;
