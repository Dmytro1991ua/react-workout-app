import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

import { colors } from '../../../../global-styles/ColorsPalette';

export const WorkoutForm = styled.form`
  display: grid;
  gap: 1.5rem 2.5rem;
  position: relative;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: baseline;
`;

export const FormLabel = styled.label`
  flex: 0 0 50%;
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 0.7rem;
  color: ${colors.mantis};
`;

export const FieldInputWrapper = styled.div`
  width: 100%;
`;

export const CloseBtn = styled(CloseOutline)`
  position: absolute;
  top: -1.6rem;
  right: -2.9rem;
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: none;
  color: ${colors.mantis};
  cursor: pointer;
`;
