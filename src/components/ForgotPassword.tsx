import React, { useRef, useState } from 'react';

import { useAuth } from '../AuthContext';
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
  FormError,
  FormSuccess,
} from '../styles/LoginStyles.styled';

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { resetPassword } = useAuth();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const email = event.target.value;
    setEmail(email);
  }
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setEmail('');
      setMessage('Check your inbox for further instructions');
    } catch (error) {
      setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <FormSection>
      <FormSectionTitle>Password Reset</FormSectionTitle>
      {error && <FormError>{error}</FormError>}
      {message && <FormSuccess>{message}</FormSuccess>}
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <FormDetails>
            <FormLabel htmlFor='email' />
            <FormInput type='email' id='email' placeholder='Email*' required onChange={handleInputChange} />
          </FormDetails>
          <FormBtn disabled={loading} type='submit'>
            Reset Password
          </FormBtn>
          <FormLink to='/login'>Log In</FormLink>
          <FormLink to='/signup'>Don&apos;t have an account?</FormLink>
        </FormBody>
      </Form>
    </FormSection>
  );
};

export default ForgotPassword;
