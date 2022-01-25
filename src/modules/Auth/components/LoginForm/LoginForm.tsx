import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../App.enums';

import { authService } from '../../Auth.service';
import {
  FormSection,
  FormSectionTitle,
  FormDetails,
  FormLabel,
  FormInput,
  FormBtn,
  FormBody,
  FormLink,
  Form,
} from './LoginStyles.styled';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const history = useHistory();

  function handleFormValuesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await authService.login(formValues.email, formValues.password);
    history.push(AppRoutes.Workouts);
  }

  return (
    <FormSection>
      <FormSectionTitle>Log In</FormSectionTitle>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <FormDetails>
            <FormLabel htmlFor='email' />
            <FormInput
              type='email'
              id='email'
              name='email'
              minLength={8}
              placeholder='Email*'
              required
              onChange={handleFormValuesChange}
              value={formValues.email}
            />
          </FormDetails>
          <FormDetails>
            <FormLabel htmlFor='password' />
            <FormInput
              type='password'
              id='password'
              name='password'
              minLength={8}
              placeholder='Password*'
              required
              onChange={handleFormValuesChange}
              value={formValues.password}
            />
          </FormDetails>
          <FormBtn type='submit'>Sign In</FormBtn>
          <FormLink to={{ pathname: AppRoutes.SignUp }}>Don&apos;t have an account?</FormLink>
          <FormLink to={{ pathname: AppRoutes.ForgotPassword }}>Forgot a password?</FormLink>
        </FormBody>
      </Form>
    </FormSection>
  );
};

export default LoginForm;
