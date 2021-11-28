import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../AuthContext";
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
} from "../styles/LoginStyles";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  function handleFormValuesChange(event) {
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(formValues.email, formValues.password);
      history.push("/workouts"); // after user done login in and it was successfull => redirect to workouts page
    } catch (error) {
      console.log(error);
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <FormSection>
      <FormSectionTitle>Log In</FormSectionTitle>
      {error && <FormError>{error}</FormError>}
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <FormDetails>
            <FormLabel htmlFor="email" />
            <FormInput
              type="email"
              id="email"
              name="email"
              minlength="8"
              placeholder="Email*"
              required
              onChange={handleFormValuesChange}
              value={formValues.email}
            />
          </FormDetails>
          <FormDetails>
            <FormLabel htmlFor="password" />
            <FormInput
              type="password"
              id="password"
              name="password"
              minlength="6"
              placeholder="Password*"
              required
              onChange={handleFormValuesChange}
              value={formValues.password}
            />
          </FormDetails>
          <FormBtn disabled={loading} type="submit">
            Sign In
          </FormBtn>
          <FormLink to="/signup">Don&apos;t have an account?</FormLink>
          <FormLink to="/forgot-password">Forgot a password?</FormLink>
        </FormBody>
      </Form>
    </FormSection>
  );
};

export default LoginForm;
