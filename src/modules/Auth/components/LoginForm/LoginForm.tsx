import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppRoutes } from '../../../../App.enums';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { authService } from '../../Auth.service';
import { FormSection, FormSectionTitle, FormDetails, FormBody, FormLink, Form } from './Login.styled';

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
            <label htmlFor='email' />
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='Email*'
              isRequired
              onChange={handleFormValuesChange}
              value={formValues.email}
              borderColor='mantis'
              fullWidth
            />
          </FormDetails>
          <FormDetails>
            <label htmlFor='password' />
            <Input
              type='password'
              id='password'
              name='password'
              placeholder='Password*'
              isRequired
              onChange={handleFormValuesChange}
              value={formValues.password}
              borderColor='mantis'
              fullWidth
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
