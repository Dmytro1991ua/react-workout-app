import React, { ReactElement } from 'react';

import { useAppSelector } from '../../store/store.hooks';
import { selectCurrentUser } from './../Auth/User.slice';
import ProfileChangePasswordForm from './components/ProfileChangePasswordForm/ProfileChangePasswordForm';
import ProfileInformationForm from './components/ProfileUserInformationForm/ProfileUserInformationForm';
import {
  ProfileBlockWrapper,
  ProfileSection,
  ProfileSectionContentWrapper,
  ProfileSectionTitle,
  ProfileSectionWrapper,
} from './Profile.styled';

const Profile = (): ReactElement => {
  const currentUser = useAppSelector(selectCurrentUser);
  const isEmailAndPasswordProvider = currentUser?.firebaseProvider?.includes('password');

  return (
    <ProfileSection>
      <ProfileSectionWrapper isEmailAndPasswordProvider={isEmailAndPasswordProvider}>
        <ProfileBlockWrapper>
          <ProfileSectionTitle>Profile Information</ProfileSectionTitle>
          <ProfileSectionContentWrapper>
            <ProfileInformationForm />
          </ProfileSectionContentWrapper>
        </ProfileBlockWrapper>

        {isEmailAndPasswordProvider && (
          <ProfileBlockWrapper>
            <ProfileSectionTitle>Change Password</ProfileSectionTitle>
            <ProfileSectionContentWrapper>
              <ProfileChangePasswordForm />
            </ProfileSectionContentWrapper>
          </ProfileBlockWrapper>
        )}
      </ProfileSectionWrapper>
    </ProfileSection>
  );
};

export default Profile;
