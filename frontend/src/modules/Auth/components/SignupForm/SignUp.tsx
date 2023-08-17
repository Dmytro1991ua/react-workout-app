import React, { ReactElement } from 'react';
import { Audio } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { FORM_ACTION_BUTTONS_CONFIG, FORM_LINKS_CONFIG, SIGN_UP_FORMS_INPUT_CONFIG } from '../../Auh.config';
import { FormHeaderLabel, FormLinkLabel } from '../../Auth.enums';
import { SignUpInitialValues } from '../../Auth.interfaces';
import { SIGN_UP_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import BaseForm from '../BaseForm/BaseForm';

const SignUp = (): ReactElement => {
  const {
    errors,
    register,
    isSubmitting,
    isSignInViaGoogleLoading,
    onSignUpWithCredentials,
    onSignInViaGoogle,
    handleSubmit,
  } = useAuth<SignUpInitialValues>({
    validationSchema: SIGN_UP_VALIDATION_SCHEMA,
  });

  const signUpFormActionButtonsConfig = FORM_ACTION_BUTTONS_CONFIG.filter(
    (config) => config.id === FormHeaderLabel.SignIn || config.id === FormHeaderLabel.SignInViaGoogle
  );

  const signUpFormLinksConfig = FORM_LINKS_CONFIG.filter(({ id }) => id === FormLinkLabel.LoginLink);

  return (
    <BaseForm<SignUpInitialValues>
      errors={errors}
      formActionButtonsConfig={signUpFormActionButtonsConfig}
      formInputsConfig={SIGN_UP_FORMS_INPUT_CONFIG}
      formLinksConfig={signUpFormLinksConfig}
      loader={<Audio color={colors.mantis} height={150} width={150} />}
      register={register}
      title={FormHeaderLabel.SignUp}
      isSubmitting={isSubmitting}
      isSignInViaGoogleLoading={isSignInViaGoogleLoading}
      onLoginOrSignUpWithCredentials={handleSubmit(onSignUpWithCredentials)}
      onLoginOrSignUpViaGoogle={onSignInViaGoogle}
    />
  );
};

export default SignUp;
