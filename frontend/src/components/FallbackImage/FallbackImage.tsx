import React, { ReactElement, useEffect, useState } from 'react';

import { UserImageSize } from '../../App.enums';
import DefaultUserPhoto from '../../assets/images/user.png';
import { UserImage } from './FallbackImage.styled';

interface FallbackImageProps {
  imageUrl: string | null;
  size: UserImageSize;
  isUserAuthenticated?: boolean;
  altText?: string;
}

const FallbackImage = ({ imageUrl, size, isUserAuthenticated, altText }: FallbackImageProps): ReactElement => {
  const [imgSrc, setImgSrc] = useState(DefaultUserPhoto);

  useEffect(() => {
    if (imageUrl) {
      setImgSrc(imageUrl);
    }
  }, [imageUrl]);

  return (
    <UserImage
      src={imgSrc}
      size={size}
      alt={altText}
      onError={() => setImgSrc(DefaultUserPhoto)}
      isUserAuthenticated={isUserAuthenticated}
    />
  );
};

export default FallbackImage;
