import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../App.enums';
import { PASSWORD_MISMATCH } from '../../Auth.constants';

import { authService } from '../../Auth.service';
import {
  FormSection,
  FormDetails,
  FormLabel,
  FormLink,
  Form,
  FormError,
  FormSectionTitle,
} from '../LoginForm/LoginStyles.styled';
import { SignUpBody, SignUpInput, SignUpBtn } from './SignUpStyles.styled';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const [error, setError] = useState('');

  const history = useHistory();

  function handleFormValuesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formValues.password !== formValues.confirmedPassword) return setError(PASSWORD_MISMATCH);

    await authService.signUp(formValues.email, formValues.password);
    history.push(AppRoutes.Login);
  }

  return (
    <FormSection>
      <FormSectionTitle>Sign Up</FormSectionTitle>
      {error && <FormError>{error}</FormError>}
      <Form onSubmit={handleSubmit}>
        <SignUpBody>
          <FormDetails>
            <FormLabel htmlFor='email' />
            <SignUpInput
              type='email'
              name='email'
              value={formValues.email}
              onChange={handleFormValuesChange}
              id='email'
              placeholder='Email*'
              required
            />
          </FormDetails>
          <FormDetails>
            <FormLabel htmlFor='password' />
            <SignUpInput
              type='password'
              id='password'
              name='password'
              value={formValues.password}
              onChange={handleFormValuesChange}
              placeholder='Password*'
              required
            />
          </FormDetails>
          <FormDetails>
            <FormLabel htmlFor='confirm-password' />
            <SignUpInput
              type='password'
              id='confirm-password'
              placeholder='Confirm Password*'
              name='confirmedPassword'
              value={formValues.confirmedPassword}
              onChange={handleFormValuesChange}
              required
            />
          </FormDetails>
          <SignUpBtn type='submit'>Sign Up</SignUpBtn>
          <FormLink to={{ pathname: AppRoutes.Login }}>Already have an account?</FormLink>
        </SignUpBody>
      </Form>
    </FormSection>
  );
};

export default SignUp;
