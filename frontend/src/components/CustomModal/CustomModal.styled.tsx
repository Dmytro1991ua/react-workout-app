import Modal from 'react-modal';
import styled from 'styled-components';
import { CloseCircle } from 'styled-icons/evaicons-solid';

import { colors } from '../../global-styles/ColorsPalette';

export const ModalWrapper = styled(Modal)<{ isWeatherDetailsModal?: boolean }>`
  min-width: ${({ isWeatherDetailsModal }) => (isWeatherDetailsModal ? '30rem' : 'fit-content')};

  @media (width >= 30em) {
    min-width: ${({ isWeatherDetailsModal }) => (isWeatherDetailsModal ? '45rem' : 'fit-content')};
  }
`;

export const ModalHeader = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.mantisDarker};
  margin-bottom: 3rem;
`;

export const CloseButton = styled(CloseCircle)`
  width: 4rem;
  height: 4rem;
  color: ${colors.mantisDarker};
  margin-left: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled('h2')`
  font-size: 2rem;
`;

export const Subtitle = styled('h3')`
  font-size: 1.6rem;
  margin-top: 1.5rem;
  opacity: 0.7;
`;

export const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ActionsContainer = styled('div')`
  margin-top: 3rem;

  > :first-child {
    margin-right: 2rem;
  }
`;
