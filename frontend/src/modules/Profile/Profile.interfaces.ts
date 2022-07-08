export type ProfileUserInformationFormInitialValues = {
  picture?: string;
  email?: string;
  name?: string;
};

export type ProfileChangePasswordInitialValues = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export interface UpdateUserInformation {
  name: string;
  photoURL: string;
}
