import React from "react";
import {
  FormButton,
  FormInput,
  FormLabel,
  FormRow,
  FormSection,
  FormSelect,
} from "../styles/FormStyles";

const Form = () => {
  return (
    <FormSection>
      <FormRow>
        <FormLabel>Type</FormLabel>
        <FormSelect>
          <option value="running">Running</option>
          <option value="cycling">Cycling</option>
        </FormSelect>
      </FormRow>
      <FormRow>
        <FormLabel>Distance</FormLabel>
        <FormInput placeholder="km" />
      </FormRow>
      <FormRow>
        <FormLabel>Duration</FormLabel>
        <FormInput placeholder="min" />
      </FormRow>
      <FormRow>
        <FormLabel>Cadence</FormLabel>
        <FormInput placeholder="step/min" />
      </FormRow>
      <FormRow>
        <FormButton>Find out</FormButton>
      </FormRow>
    </FormSection>
  );
};

export default Form;
