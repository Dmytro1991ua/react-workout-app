import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../App.enums';
import Button from '../../../../components/Button/Button';
import { PASSWORD_MISMATCH } from '../../Auth.constants';

import { authService } from '../../Auth.service';
import {
  FormSection,
  FormDetails,
  FormLabel,
  Form,
  FormError,
  FormSectionTitle,
} from '../LoginForm/LoginStyles.styled';
import { SignUpBody, SignUpInput, SignUpLink } from './SignUpStyles.styled';

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const [error, setError] = useState('');

  const history = useHistory();

  function handleFormValuesChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(): Promise<void> {
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
          <Button
            type='submit'
            fullWidth
            backgroundColor='lighterBlue'
            hoverColor='mantisDarker'
            color='white'
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <SignUpLink to={{ pathname: AppRoutes.Login }}>Already have an account?</SignUpLink>
        </SignUpBody>
      </Form>
    </FormSection>
  );
};

export default SignUp;
