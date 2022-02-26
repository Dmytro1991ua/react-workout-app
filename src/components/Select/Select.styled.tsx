import styled from 'styled-components';
import { colors } from '../../global-styles/Global.styled';

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
