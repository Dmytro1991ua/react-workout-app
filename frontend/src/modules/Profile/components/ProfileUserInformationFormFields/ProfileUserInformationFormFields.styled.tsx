import styled from 'styled-components';
import { FormDetails } from '../../../Auth/components/LoginForm/Login.styled';

export const ProfileFormFieldsWrapper = styled('div')`
  flex: 1;
  margin-left: 0;

  @media (width >= 35em) {
    margin-left: 4rem;
  }
`;

export const ProfileFormDetails = styled(FormDetails)`
  margin-bottom: 3rem;
`;
