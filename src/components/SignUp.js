import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../AuthContext';
import {
  FormSection,
  FormDetails,
  FormLabel,
  FormLink,
  Form,
  FormError,
  FormSectionTitle,
} from '../styles/LoginStyles';
import { SignUpBody, SignUpInput, SignUpBtn } from '../styles/SignUpStyles';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmedPasswordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== confirmedPasswordRef.current.value) return setError('Password do not match');

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/workouts'); // after user done sign up and it was successfull => redirect to workouts page
    } catch (error) {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <FormSection>
      <FormSectionTitle>Sign Up</FormSectionTitle>
      {error && <FormError>{error}</FormError>}
      <Form onSubmit={handleSubmit}>
        <SignUpBody>
          <FormDetails>
            <FormLabel htmlFor='email' />
            <SignUpInput type='email' id='email' placeholder='Email*' required ref={emailRef} />
          </FormDetails>
          <FormDetails>
            <FormLabel htmlFor='password' />
            <SignUpInput type='password' id='password' placeholder='Password*' required ref={passwordRef} />
          </FormDetails>
          <FormDetails>
            <FormLabel htmlFor='confirm-password' />
            <SignUpInput
              type='password'
              id='confirm-password'
              placeholder='Confirm Password*'
              required
              ref={confirmedPasswordRef}
            />
          </FormDetails>
          <SignUpBtn disabled={loading} type='submit'>
            Sign Up
          </SignUpBtn>
          <FormLink to='/login'>Already have an account?</FormLink>
        </SignUpBody>
      </Form>
    </FormSection>
  );
};

export default SignUp;
