import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { colors } from './ColorsPalette';

export const CustomToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: fit-content;
    min-width: 350px;
    padding: 0;
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
