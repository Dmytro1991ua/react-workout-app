import React from 'react';
import ReactDOM from 'react-dom';

import { Subtitle, Title } from '../../../../components/CustomModal/CustomModal.styled';
import WarningPopup from '../WarningPopup/WarningPopup';

export const CustomUserLeaveWarningPopup = (message: string, callback: (result: boolean) => void): void => {
  const modal = document.createElement('div');
  modal.setAttribute('custom-confirmation-navigation', '');
  document.body.appendChild(modal);

  const { title, subtitle } = JSON.parse(message);

  const modalContent = (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );

  const closeModal = (callbackState: boolean): void => {
    ReactDOM.unmountComponentAtNode(modal);
    document.body.removeChild(modal);
    callback(callbackState);
  };

  ReactDOM.render(
    <WarningPopup isOpen={true} title='Unsaved progress warning' modalContent={modalContent} onClose={closeModal} />,
    modal
  );
};
