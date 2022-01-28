import styled from 'styled-components';

import { colors } from '../../../../global-styles/GlobalStyles.styled';
import { FormBody, FormLink } from '../LoginForm/LoginStyles.styled';

export const SignUpBody = styled(FormBody)`
  border: 5px solid ${colors.mantisDarker};
  margin-bottom: -6rem;

  @media (min-width: 48em) {
    margin-bottom: -12rem;
  }
`;

export const SignUpLink = styled(FormLink)`
  margin-top: 2rem;
`;
