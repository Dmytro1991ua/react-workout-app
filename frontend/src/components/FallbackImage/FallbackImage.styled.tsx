import styled from 'styled-components';

import { UserImageSize } from '../../App.enums';
import { colors } from '../../global-styles/ColorsPalette';

function userImageSize(size: UserImageSize) {
  switch (size) {
    case UserImageSize.Small:
      return { width: '5rem', height: '5rem' };
    case UserImageSize.Medium:
      return { width: '20rem', height: '20rem' };
    case UserImageSize.Large:
      return { width: '40rem', height: '40rem' };
  }
}

export const UserImage = styled('img')<{ size: UserImageSize; isUserAuthenticated?: boolean }>`
  display: ${({ isUserAuthenticated, size }) =>
    !isUserAuthenticated && size === UserImageSize.Small ? 'none' : 'block'};
  width: ${({ size }) => userImageSize(size).width};
  height: ${({ size }) => userImageSize(size).height};
  margin-right: ${({ size }) => (size === UserImageSize.Small ? '2rem' : 0)};
  background-color: ${colors.powderAsh};
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;
