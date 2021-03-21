import React from "react";
import {
  LoginFormSection,
  LoginFormDetails,
  LoginFormLabel,
  LoginFormInput,
  LoginFormBtn,
  LoginFormBody,
} from "../styles/LoginStyles";

const LoginForm = () => {
  return (
    <LoginFormSection>
      <LoginFormBody>
        <LoginFormDetails>
          <LoginFormLabel htmlFor="email"></LoginFormLabel>
          <LoginFormInput type="email" id="email" placeholder="Email" />
        </LoginFormDetails>
        <LoginFormDetails>
          <LoginFormLabel htmlFor="password"></LoginFormLabel>
          <LoginFormInput
            type="password"
            id="password"
            placeholder="Password"
          />
        </LoginFormDetails>
        <LoginFormBtn>Login</LoginFormBtn>
      </LoginFormBody>
    </LoginFormSection>
  );
};

export default LoginForm;
