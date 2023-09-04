import styled from 'styled-components';
import { AddAPhoto } from 'styled-icons/material';
import { FieldErrorMessage } from '../../../../components/Input/Input.styled';
import { colors } from '../../../../global-styles/ColorsPalette';

export const ProfileImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: inherit;
`;

export const ImageWrapper = styled('figure')`
  position: relative;
  margin-bottom: 1rem;
`;

export const ProfileInputFile = styled('input')`
  display: none;
`;

export const ProfileAddButtonIcon = styled(AddAPhoto)`
  position: absolute;
  bottom: 20%;
  right: -5%;
  width: 5rem;
  height: 5rem;
  fill: ${colors.white};
  transition transform 300ms ease-in-out ;
  cursor: pointer ;

  &:hover {
    transform: scale(1.1) ;
  }
`;

export const ProfileFieldErrorMessage = styled(FieldErrorMessage)`
  margin-top: 0;
`;
