import React, { ReactElement } from 'react';

import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { FallbackMessageSubtitle, FallbackMessageTitle } from './FallbackMessage.styled';

interface FallbackMessageProps {
  title?: string;
  message?: string;
  isQuizFallbackMessage?: boolean;
}

const FallbackMessage = ({ message, title, isQuizFallbackMessage = false }: FallbackMessageProps): ReactElement => {
  return (
    <FormAndFallbackMessageWrapper $isQuizFallbackMessage={isQuizFallbackMessage}>
      <FallbackMessageTitle>{title}</FallbackMessageTitle>
      <FallbackMessageSubtitle>{message}</FallbackMessageSubtitle>
    </FormAndFallbackMessageWrapper>
  );
};

export default FallbackMessage;
