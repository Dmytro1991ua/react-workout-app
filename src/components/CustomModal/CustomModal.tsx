import React, { ReactElement } from 'react';
import Modal from 'react-modal';

import Button from '../Button/Button';
import { GlobalModal, GlobalOverlay } from './../../global-styles/ModalGlobal.styled';
import { ActionsContainer, CloseButton, ContentWrapper, ModalHeader, Title } from './CustomModal.styled';

interface CustomModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  shouldCloseOnOverlayClick?: boolean;
  title?: string;
}

const CustomModal = (props: CustomModalProps): ReactElement => {
  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      onRequestClose={props.onClose}
      ariaHideApp={false}
      className='_'
      overlayClassName='_'
      contentElement={(props, children) => <GlobalModal {...props}>{children}</GlobalModal>}
      overlayElement={(props, contentElement) => <GlobalOverlay {...props}>{contentElement}</GlobalOverlay>}
    >
      <>
        <ModalHeader>
          <Title>{props.title}</Title>
          <CloseButton onClick={props.onClose} />
        </ModalHeader>
        <ContentWrapper>{props.children}</ContentWrapper>
        <ActionsContainer>
          <Button backgroundColor='mantisDarker' hoverColor='mantis' color='white' onClick={props.onClose}>
            Close
          </Button>
          <Button backgroundColor='tomato' hoverColor='errorBg' color='white' onClick={props.onSubmit}>
            Accept
          </Button>
        </ActionsContainer>
      </>
    </Modal>
  );
};

export default CustomModal;
