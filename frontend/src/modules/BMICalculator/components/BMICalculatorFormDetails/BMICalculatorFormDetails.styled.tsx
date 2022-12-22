import styled from 'styled-components';
import { Select } from '../../../../components/Select/Select';
import { FormDetails } from '../../../Auth/components/LoginForm/Login.styled';

export const FormDetailsWrapper = styled(FormDetails)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const InputWrapper = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SelectWrapper = styled('div')`
  align-self: center;
  margin-left: 1rem;
`;
