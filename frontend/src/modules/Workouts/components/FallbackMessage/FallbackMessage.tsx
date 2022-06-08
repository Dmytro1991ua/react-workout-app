import React, { ReactElement } from 'react';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { FallbackMessageSubtitle, FallbackMessageTitle } from './FallbackMessage.styled';

interface FallbackMessageProps {
  title?: string;
  message?: string;
}

const FallbackMessage = ({ message, title }: FallbackMessageProps): ReactElement => {
  return (
    <FormAndFallbackMessageWrapper>
      <FallbackMessageTitle>{title}</FallbackMessageTitle>
      <FallbackMessageSubtitle>{message}</FallbackMessageSubtitle>
    </FormAndFallbackMessageWrapper>
  );
};

export default FallbackMessage;
