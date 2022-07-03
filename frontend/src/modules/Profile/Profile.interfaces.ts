export type ProfileSettingsFormInitialValues = {
  picture?: string;
  email?: string;
  name?: string;
  // currentPassword?: string;
  // newPassword?: string;
  // confirmPassword?: string;
};

export interface UpdateUserInformation {
  name: string;
  photoURL: string;
}
