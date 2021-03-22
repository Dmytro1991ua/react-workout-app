import React from "react";
import {
  FormSection,
  FormDetails,
  FormLabel,
  FormInput,
  FormBtn,
  FormBody,
  FormLink,
} from "../styles/LoginStyles";

const LoginForm = () => {
  return (
    <FormSection>
      <FormBody>
        <FormDetails>
          <FormLabel htmlFor="email"></FormLabel>
          <FormInput type="email" id="email" placeholder="Email*" />
        </FormDetails>
        <FormDetails>
          <FormLabel htmlFor="password"></FormLabel>
          <FormInput type="password" id="password" placeholder="Password*" />
        </FormDetails>
        <FormBtn>Sign In</FormBtn>
        <FormLink to="/signup">Don't have an account?</FormLink>
      </FormBody>
    </FormSection>
  );
};

export default LoginForm;
