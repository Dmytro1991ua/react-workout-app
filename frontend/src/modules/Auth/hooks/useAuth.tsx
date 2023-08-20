import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useQueryParams } from '../../../cdk/hooks/useQueryParams';
import {
  ForgotPasswordInitialValues,
  HookProps,
  LoginInitialValues,
  ResetPasswordInitialValues,
  ReturnedHookType,
  SignUpInitialValues,
} from '../Auth.interfaces';
import { authService } from '../Auth.service';

export const useAuth = <T extends FieldValues>({ validationSchema }: HookProps): ReturnedHookType<T> => {
  const queryParams = useQueryParams();

  const [isSignInViaGoogleLoading, setIsSignInViaGoogleLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<T>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onForgotPassword = useCallback(async (formData: ForgotPasswordInitialValues): Promise<void> => {
    const { email } = formData;

    await authService.forgotPassword(email);

    reset();
  }, []);

  const onLoginWithCredentials = useCallback(async (formData: LoginInitialValues): Promise<void> => {
    const { email, password } = formData;

    await authService.login(email, password);

    reset();
  }, []);

  const onSignInViaGoogle = useCallback(async (): Promise<void> => {
    try {
      setIsSignInViaGoogleLoading(true);

      await authService.signInViaGoogle();

      setIsSignInViaGoogleLoading(false);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }, []);

  const onResetPassword = useCallback(async (formData: ResetPasswordInitialValues): Promise<void> => {
    const { newPassword } = formData;

    const getOobCodeFromUrl = queryParams.get('oobCode');

    if (getOobCodeFromUrl) {
      await authService.resetPassword(getOobCodeFromUrl, newPassword);
    }

    reset();
  }, []);

  const onSignUpWithCredentials = useCallback(async (formData: SignUpInitialValues): Promise<void> => {
    const { email, password } = formData;

    await authService.signUp(email, password);

    reset();
  }, []);

  return {
    isSignInViaGoogleLoading,
    errors,
    isSubmitting,
    handleSubmit,
    register,
    onForgotPassword,
    onResetPassword,
    onSignInViaGoogle,
    onLoginWithCredentials,
    onSignUpWithCredentials,
  };
};