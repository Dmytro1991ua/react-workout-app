import React, { useState } from 'react';
import { AppRoutes } from '../../../../App.enums';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { authService } from '../../Auth.service';
import { FormSection, FormSectionTitle, FormDetails, FormBody, FormLink, Form } from '../LoginForm/Login.styled';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const email = event.target.value;
    setEmail(email);
  }

  async function handleSubmit(): Promise<void> {
    await authService.resetPassword(email);
  }

  return (
    <FormSection>
      <FormSectionTitle>Password Reset</FormSectionTitle>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <FormDetails>
            <Input
              type='email'
              id='email'
              placeholder='Email*'
              isRequired
              onChange={handleInputChange}
              borderColor='mantis'
              value={email}
              fullWidth
            />
          </FormDetails>
          <Button
            type='submit'
            fullWidth
            backgroundColor='mantis'
            hoverColor='mantisDarker'
            color='white'
            onClick={handleSubmit}
          >
            Reset Password
          </Button>
          <FormLink to={{ pathname: AppRoutes.Login }}>Log In</FormLink>
          <FormLink to={{ pathname: AppRoutes.SignUp }}>Don&apos;t have an account?</FormLink>
        </FormBody>
      </Form>
    </FormSection>
  );
};

export default ForgotPassword;
