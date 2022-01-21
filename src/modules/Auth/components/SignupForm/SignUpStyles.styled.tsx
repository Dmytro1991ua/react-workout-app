import styled from 'styled-components';

import { colors } from '../../../../global-styles/GlobalStyles.styled';
import { FormBody, FormBtn, FormInput } from '../LoginForm/LoginStyles.styled';

export const SignUpBody = styled(FormBody)`
  border: 5px solid ${colors.mantisDarker};
  margin-bottom: -6rem;

  @media (min-width: 48em) {
    margin-bottom: -12rem;
  }
`;

export const SignUpInput = styled(FormInput)`
  border-bottom: 2px solid ${colors.lighterBlue};
`;

export const SignUpBtn = styled(FormBtn)`
  background-color: ${colors.lighterBlue};
  margin-bottom: 2rem;
  &:hover {
    background-color: ${colors.mantisDarker};
  }
`;
