import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../../components/Button/Button';
import { colors } from '../../../../global-styles/ColorsPalette';

import { WorkoutsSection } from '../../../Workouts/Workouts.styled';

export const FormSection = styled(WorkoutsSection)`
  border: none;
  margin: 0;
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormSectionTitle = styled.h2`
  color: ${colors.white};
  letter-spacing: 0.1rem;
  margin-bottom: 1.3rem;
`;

export const Form = styled.form`
  max-width: 28rem;
  width: 100%;

  @media (min-width: 48em) {
    max-width: 32rem;
  }

  @media (min-width: 62em) {
    max-width: 40rem;
  }
`;

export const FormBody = styled.div`
  border: 5px solid ${colors.lighterBlue};
  padding: 2rem 1rem;
  border-radius: 1.2rem;

  @media (min-width: 62em) {
    padding: 4rem 1rem;
  }
`;

export const FormDetails = styled.div`
  margin-bottom: 5rem;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

export const FormSubmitBtn = styled(Button)`
  margin-bottom: 2rem;
`;

export const FormLink = styled(Link)`
  display: block;
  color: ${colors.white};
  text-align: center;
  text-decoration: underline;

  &:not(:last-child) {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;
