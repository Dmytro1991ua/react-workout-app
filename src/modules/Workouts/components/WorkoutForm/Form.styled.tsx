import styled from 'styled-components';

import { colors } from '../../../../global-styles/Global.styled';

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
