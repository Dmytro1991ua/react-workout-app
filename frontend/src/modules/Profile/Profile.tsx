import React, { ReactElement } from 'react';

import ProfileInformationForm from './components/ProfileInformationForm/ProfileInformationForm';
import { ProfileSection, ProfileSectionTitle, ProfileSectionWrapper, ProfileSettingsWrapper } from './Profile.styled';
ProfileInformationForm;

const Profile = (): ReactElement => {
  return (
    <ProfileSection>
      <ProfileSectionWrapper>
        <ProfileSectionTitle>Profile Information</ProfileSectionTitle>
        <ProfileSettingsWrapper>
          <ProfileInformationForm />
        </ProfileSettingsWrapper>
      </ProfileSectionWrapper>
    </ProfileSection>
  );
};

export default Profile;
