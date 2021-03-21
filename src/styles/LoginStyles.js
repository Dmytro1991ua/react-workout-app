import styled from "styled-components";
import { fadeInDown, colors } from "./GlobalStyles";
import { WorkoutsSection } from "./WorkoutsStyles";

export const LoginFormSection = styled(WorkoutsSection)`
  border: none;
  margin: 0;
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginFormBody = styled.div`
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

export const LoginFormDetails = styled.div`
  margin-bottom: 5rem;
  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

export const LoginFormLabel = styled.label``;

export const LoginFormInput = styled.input`
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

export const LoginFormBtn = styled.button`
  width: 100%;
  font-size: 1.7rem;
  text-transform: uppercase;
  border: none;
  padding: 1rem;
  border-radius: 1.2rem;
  background-color: ${colors.mantisDarker};
  color: ${colors.white};
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:hover {
     background-color: ${colors.mantis};
  }
`;
