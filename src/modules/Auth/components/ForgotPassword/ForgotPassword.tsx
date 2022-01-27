import React, { useState } from 'react';
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
} from '../LoginForm/LoginStyles.styled';

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
            <FormLabel htmlFor='email' />
            <FormInput type='email' id='email' placeholder='Email*' required onChange={handleInputChange} />
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
