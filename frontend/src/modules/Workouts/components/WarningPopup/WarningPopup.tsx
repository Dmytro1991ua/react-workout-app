import React, { ReactElement } from 'react';

import CustomModal from '../../../../components/CustomModal/CustomModal';

interface WarningPopupProps {
  isOpen: boolean;
  title: string;
  onClose: (value: boolean) => void;
  modalContent?: React.ReactNode;
}

const WarningPopup = ({ isOpen, title, modalContent, onClose }: WarningPopupProps): ReactElement => {
  return (
    <CustomModal title={title} isOpen={isOpen} onClose={() => onClose(false)} onSubmit={() => onClose(true)}>
      {modalContent}
    </CustomModal>
  );
};

export default WarningPopup;
