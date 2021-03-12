import styled from "styled-components";
import { colors } from "./GlobalStyles";

export const FormSection = styled.form`
  background-color: ${colors.lighterBlue};
  border-radius: 5px;
  padding: 1.2rem 1.2rem;
  margin-bottom: 1.75rem;
  display: grid;
  //grid-template-columns: 1fr 1fr;
  gap: 1.5rem 2.5rem;
  //height: 9.25rem;
  transition: all 0.5s, transform 1ms;
  border: 2px solid ${colors.mantis};

  &.hidden {
    transform: translateY(-30rem);
    height: 0;
    padding: 0 2.25rem;
    margin-bottom: 0;
    opacity: 0;
  }

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem 2.75rem;
    //height: 13.25rem;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
`;

export const FormLabel = styled.label`
  flex: 0 0 50%;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0.7rem;
  color: ${colors.mantis};
`;

export const FormSelect = styled.select`
  width: 100%;
  background-color: ${colors.powderAsh};
  padding: 0.3rem 0rem;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.3rem 1.1rem;
  font-family: inherit;
  font-size: 1.4rem;
  border: none;
  border-radius: 3px;
  background-color: ${colors.powderAsh};
  transition: all 0.2s ease-in-out;
  border: 2px solid ${colors.mantisDarker};
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #fff;
  }
`;

export const FormButton = styled.button`
  width: 12rem;
  border: none;
  padding: 1rem 1.2rem;
  text-align: center;
  border-radius: 1.2rem;
  background-color: ${colors.mantis};
  font-size: 1.5rem;
  color: ${colors.white};
  transition: all 0.3s ease-out;
  text-transform: uppercase;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${colors.mantisDarker};
  }
`;
