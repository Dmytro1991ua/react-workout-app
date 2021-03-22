import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./GlobalStyles";
import { WorkoutsSection } from "./WorkoutsStyles";

export const FormSection = styled(WorkoutsSection)`
  border: none;
  margin: 0;
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FormBody = styled.div`
  max-width: 28rem;
  width: 100%;
  border: 5px solid ${colors.lighterBlue};
  padding: 2rem 1rem;
  border-radius: 1.2rem;

  @media (min-width: 48em) {
    max-width: 32rem;
  }

  @media (min-width: 62em) {
    max-width: 40rem;
    padding: 4rem 1rem;
  }
`;

export const FormDetails = styled.div`
  margin-bottom: 5rem;
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

export const FormLabel = styled.label``;

export const FormInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${colors.mantis};
  border-radius: 1.2rem;
  color: ${colors.white};
  padding: 1.2rem 1rem;

  &::placeholder {
    font-size: 1.6rem;
    color: ${colors.white};
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  font-size: 1.7rem;
  text-transform: uppercase;
  border: none;
  padding: 1rem;
  border-radius: 1.2rem;
  background-color: ${colors.mantisDarker};
  color: ${colors.white};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 2rem;

  &:hover {
    background-color: ${colors.mantis};
  }
`;

export const FormLink = styled(Link)`
  display: block;
  color: ${colors.white};
  text-align: center;
  text-decoration: underline;
`;
