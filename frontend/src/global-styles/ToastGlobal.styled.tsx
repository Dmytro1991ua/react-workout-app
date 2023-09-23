import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { colors } from './ColorsPalette';

export const CustomToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: fit-content;
    min-width: 31rem;
    padding: 0 1rem;

    @media only screen and (max-width: 480px) {
      left: 50%;
      transform: translateX(-50%);
    }

    @media (width >= 48rem) {
      min-height: 35rem;
      padding: 0;
    }
  }

  & .Toastify__toast-theme--dark {
    background-color: ${colors.darkBlue};
    border-radius: 1.2rem;
    border: 3px solid ${colors.mantisDarker};
  }

  & .Toastify__close-button {
    align-self: center;
    color: ${colors.mantisDarker};
  }

  & .Toastify__close-button > svg {
    width: 2rem;
    height: 2.2rem;
  }
`;
