import React, { ReactElement } from 'react';

import Button from '../Button/Button';
import { GlobalModal, GlobalOverlay } from './../../global-styles/ModalGlobal.styled';
import { ActionsContainer, CloseButton, ContentWrapper, ModalHeader, Title, ModalWrapper } from './CustomModal.styled';

interface CustomModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  title?: string;
  isWeatherDetailsModal?: boolean;
}

const CustomModal = (props: CustomModalProps): ReactElement => {
  return (
    <ModalWrapper
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      onRequestClose={props.onClose}
      ariaHideApp={false}
      className='_'
      overlayClassName='_'
      contentElement={(props, children) => <GlobalModal {...props}>{children}</GlobalModal>}
      overlayElement={(props, contentElement) => <GlobalOverlay {...props}>{contentElement}</GlobalOverlay>}
      isWeatherDetailsModal={props.isWeatherDetailsModal}
    >
      <>
        <ModalHeader>
          <Title>{props.title}</Title>
          <CloseButton onClick={props.onClose} />
        </ModalHeader>
        <ContentWrapper>{props.children}</ContentWrapper>
        {props.isWeatherDetailsModal ? null : (
          <ActionsContainer>
            <Button backgroundColor='mantisDarker' hoverColor='mantis' color='white' onClick={props.onClose}>
              Close
            </Button>
            <Button backgroundColor='tomato' hoverColor='errorBg' color='white' onClick={props.onSubmit}>
              Accept
            </Button>
          </ActionsContainer>
        )}
      </>
    </ModalWrapper>
  );
};

export default CustomModal;
