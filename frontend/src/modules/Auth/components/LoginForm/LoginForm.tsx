import React, { ReactElement } from 'react';
import { BallTriangle } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { FORM_ACTION_BUTTONS_CONFIG, FORM_LINKS_CONFIG, LOGIN_FORM_INPUTS_CONFIG } from '../../Auh.config';
import { FormHeaderLabel, FormLinkLabel } from '../../Auth.enums';
import { LoginInitialValues } from '../../Auth.interfaces';
import { LOGIN_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import BaseForm from '../BaseForm/BaseForm';

const LoginForm = (): ReactElement => {
  const {
    errors,
    register,
    isSubmitting,
    isSignInViaGoogleLoading,
    onLoginWithCredentials,
    onSignInViaGoogle,
    handleSubmit,
  } = useAuth<LoginInitialValues>({
    validationSchema: LOGIN_VALIDATION_SCHEMA,
  });

  const loginFormActionButtonsConfig = FORM_ACTION_BUTTONS_CONFIG.filter(
    ({ id }) => id === FormHeaderLabel.SignIn || id === FormHeaderLabel.SignInViaGoogle
  );

  const loginFormLinksConfig = FORM_LINKS_CONFIG.filter(
    ({ id }) => id === FormLinkLabel.ForgetPasswordLink || id === FormLinkLabel.SignUpLink
  );

  return (
    <BaseForm<LoginInitialValues>
      errors={errors}
      formActionButtonsConfig={loginFormActionButtonsConfig}
      formInputsConfig={LOGIN_FORM_INPUTS_CONFIG}
      formLinksConfig={loginFormLinksConfig}
      loader={<BallTriangle color={colors.mantis} height={150} width={150} />}
      register={register}
      title={FormHeaderLabel.SignIn}
      isSubmitting={isSubmitting}
      isSignInViaGoogleLoading={isSignInViaGoogleLoading}
      onLoginOrSignUpWithCredentials={handleSubmit(onLoginWithCredentials)}
      onLoginOrSignUpViaGoogle={onSignInViaGoogle}
    />
  );
};

export default LoginForm;
