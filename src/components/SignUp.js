import React from "react";
import { FormSection, FormDetails, FormLabel, FormLink } from "../styles/LoginStyles";
import { SignUpBody, SignUpInput, SignUpBtn } from "../styles/SignUpStyles";

const SignUp = () => {
  return (
    <FormSection>
      <SignUpBody>
        <FormDetails>
          <FormLabel htmlFor="name"></FormLabel>
          <SignUpInput type="text" id="name" placeholder="Name*" />
        </FormDetails>
        <FormDetails>
          <FormLabel htmlFor="email"></FormLabel>
          <SignUpInput type="email" id="email" placeholder="Email*" />
        </FormDetails>
        <FormDetails>
          <FormLabel htmlFor="password"></FormLabel>
          <SignUpInput type="password" id="password" placeholder="Password*" />
        </FormDetails>
        <FormDetails>
          <FormLabel htmlFor="confirm-password"></FormLabel>
          <SignUpInput
            type="password"
            id="confirm-password"
            placeholder="Confirm Password*"
          />
        </FormDetails>
        <SignUpBtn>Sign Up</SignUpBtn>
        <FormLink to="/login">Already have an account?</FormLink>
      </SignUpBody>
    </FormSection>
  );
};

export default SignUp;
