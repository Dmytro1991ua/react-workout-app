import React, { ReactElement } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AppRoutes } from '../../../../App.enums';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { authService } from '../../Auth.service';
import { LOGIN_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { FormSection, FormSectionTitle, FormDetails, FormBody, FormLink, Form } from './Login.styled';

const LoginForm = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
  });

  async function handleFromSubmit(formData: FieldValues): Promise<void> {
    const { email, password } = formData;

    await authService.login(email, password);

    reset();
  }

  return (
    <FormSection>
      <FormSectionTitle>Log In</FormSectionTitle>
      <Form onSubmit={handleSubmit(handleFromSubmit)}>
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
          <Button type='submit' fullWidth backgroundColor='mantisDarker' hoverColor='mantis' color='white'>
            Sign In
          </Button>
          <FormLink to={{ pathname: AppRoutes.SignUp }}>Don&apos;t have an account?</FormLink>
          <FormLink to={{ pathname: AppRoutes.ForgotPassword }}>Forgot a password?</FormLink>
        </FormBody>
      </Form>
    </FormSection>
  );
};

export default LoginForm;
