import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../App.enums';
import Button from '../../../../components/Button/Button';

import { authService } from '../../Auth.service';
import {
  FormSection,
  FormSectionTitle,
  FormDetails,
  FormLabel,
  FormInput,
  FormBody,
  FormLink,
  Form,
} from './LoginStyles.styled';

const LoginForm = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const history = useHistory();

  function handleFormValuesChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(): Promise<void> {
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
          <Button
            type='submit'
            fullWidth
            backgroundColor='mantisDarker'
            hoverColor='mantis'
            color='white'
            onClick={handleSubmit}
          >
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
