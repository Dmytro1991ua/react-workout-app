import React, { useRef, useState } from "react";
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
  FormSuccess,
} from "../styles/LoginStyles";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      emailRef.current.value = "";
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      setError("Failed to reset password");
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
            <FormLabel htmlFor="email"></FormLabel>
            <FormInput
              type="email"
              id="email"
              minlength="8"
              placeholder="Email*"
              required
              ref={emailRef}
            />
          </FormDetails>
          <FormBtn disabled={loading} type="submit">
            Reset Password
          </FormBtn>
          <FormLink to="/login">Log In</FormLink>
          <FormLink to="/signup">Don't have an account?</FormLink>
        </FormBody>
      </Form>
    </FormSection>
  );
};

export default ForgotPassword;
