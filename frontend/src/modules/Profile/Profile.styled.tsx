import styled from 'styled-components';
import { colors } from '../../global-styles/ColorsPalette';
import { FormSection } from '../Auth/components/LoginForm/Login.styled';

export const ProfileSection = styled(FormSection)`
  min-height: 100vh;
  color: ${colors.white};
  padding: 0 1.6rem;
  margin-top: 5rem;
`;

export const ProfileSectionWrapper = styled('div')<{ isEmailAndPasswordProvider?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem;
  width: 100%;
  height: ${({ isEmailAndPasswordProvider }) => (isEmailAndPasswordProvider ? '72vh' : 'fit-content')}; 72vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media (width >= 62em) {
    height: fit-content;
    grid-template-columns: ${({ isEmailAndPasswordProvider }) => (isEmailAndPasswordProvider ? '1fr 1fr' : '1fr')};
    justify-items: ${({ isEmailAndPasswordProvider }) => (isEmailAndPasswordProvider ? 'flex-start' : 'center')};
  }
`;

export const ProfileBlockWrapper = styled('div')`
  width: 100%;
  max-width: 75rem;
  background-color: ${colors.lighterBlue};
  border: 2px solid ${colors.mantisDarker};
  padding: 1.5rem;
  border-radius: 1rem;
`;

export const ProfileSectionTitle = styled('h2')`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid ${colors.mantisDarker};
`;

export const ProfileSectionContentWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
