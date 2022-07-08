import React, { ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import { UserImageSize } from '../../../../App.enums';
import FallbackImage from '../../../../components/FallbackImage/FallbackImage';
import { useAppSelector } from '../../../../store/store.hooks';
import { selectCurrentUser } from '../../../Auth/User.slice';
import { ProfileUserInformationFormInitialValues } from '../../Profile.interfaces';
import ProgressBar from './../../../../components/ProgressBar/ProgressBar';
import {
  ImageWrapper,
  ProfileAddButtonIcon,
  ProfileFieldErrorMessage,
  ProfileImageContainer,
  ProfileInputFile,
} from './ProfileImage.styled';

interface ProfileImageProps {
  register: UseFormRegister<ProfileUserInformationFormInitialValues>;
  errors: FieldErrors<FieldValues>;
  onHandleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadProgress: number;
}

const ProfileImage = ({ register, errors, onHandleImageChange, uploadProgress }: ProfileImageProps): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);

  const { onChange, ...params } = register('picture');

  return (
    <ProfileImageContainer>
      <ImageWrapper>
        <label htmlFor='file'>
          <FallbackImage
            imageUrl={currentUser?.photoURL as string}
            size={UserImageSize.Medium}
            altText="User's profile photo"
          />
          <ProfileAddButtonIcon onClick={(e) => e.stopPropagation()} />
        </label>
        <ProfileInputFile
          {...params}
          type='file'
          accept='.jpg, .jpeg, .png'
          id='file'
          {...register('picture')}
          onChange={(e) => {
            onHandleImageChange(e);
            onChange(e);
          }}
        />
      </ImageWrapper>
      {errors.picture && <ProfileFieldErrorMessage>{errors.picture.message}</ProfileFieldErrorMessage>}
      {uploadProgress > 0 && !errors.picture && <ProgressBar value={uploadProgress} max={100} color='mantis' />}
    </ProfileImageContainer>
  );
};

export default ProfileImage;
