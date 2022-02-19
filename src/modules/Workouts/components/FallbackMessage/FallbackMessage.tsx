import React, { ReactElement } from 'react';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';
import { FallbackMessageSubtitle, FallbackMessageTitle } from './FallbackMessage.styled';

const FallbackMessage = (): ReactElement => {
  return (
    <FormAndFallbackMessageWrapper>
      <FallbackMessageTitle>You have no available workouts</FallbackMessageTitle>
      <FallbackMessageSubtitle>
        🏁 To save a new workout just click on the map and fill-out the details on the form
      </FallbackMessageSubtitle>
    </FormAndFallbackMessageWrapper>
  );
};

export default FallbackMessage;
