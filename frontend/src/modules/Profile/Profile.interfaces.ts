import {
  DeepMap,
  DeepPartial,
  DefaultValues,
  FieldError,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { AnyObjectSchema } from 'yup';

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

export type HookProps<T extends FieldValues> = {
  validationSchema: AnyObjectSchema;
  defaultValues: DefaultValues<T>;
  currentUser?: CurrentUser | null;
};

export type ReturnedHookType<T extends FieldValues> = {
  errors: DeepMap<DeepPartial<T>, FieldError>;
  isDirty: boolean;
  isWarningPopupShown: boolean;
  uploadProgress: number;
  handleSubmit: UseFormHandleSubmit<T>;
  register: UseFormRegister<T>;
  onHandlePasswordChange: (data: T) => Promise<void>;
  onHandleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleUserInformationChange: (data: T) => Promise<void>;
};
