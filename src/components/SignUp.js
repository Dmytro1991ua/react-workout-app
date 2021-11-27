import React, { useEffect, useState } from 'react';
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
  const [formValues, setFormValues] = useState({ email: '', password: '', confirmedPassword: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const history = useHistory();

  useEffect(() => {
    handleFormValuesChange(event);
    return () => {
      setFormValues({});
    };
  }, []);

  function handleFormValuesChange(event) {
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formValues.password !== formValues.confirmedPassword) return setError('Password do not match');

    try {
      setError('');
      setLoading(true);
      await signup(formValues.email, formValues.password);
      history.push('/login');
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
