import { ReactElement } from 'react';
import { Bars } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { FORGOT_PASSWORD_FORM_INPUTS_CONFIGS, FORM_ACTION_BUTTONS_CONFIG, FORM_LINKS_CONFIG } from '../../Auh.config';
import { FormHeaderLabel, FormLinkLabel } from '../../Auth.enums';
import { ForgotPasswordInitialValues } from '../../Auth.interfaces';
import { FORGOT_PASSWORD_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import BaseForm from '../BaseForm/BaseForm';

const ForgotPasswordForm = (): ReactElement => {
  const { errors, register, isSubmitting, onForgotPassword, handleSubmit } = useAuth<ForgotPasswordInitialValues>({
    validationSchema: FORGOT_PASSWORD_VALIDATION_SCHEMA,
  });

  const forgotPasswordFormActionButtonsConfig = FORM_ACTION_BUTTONS_CONFIG.filter(
    ({ id }) => id === FormHeaderLabel.Submit
  );

  const forgotPasswordFormLinksConfig = FORM_LINKS_CONFIG.filter(
    ({ id }) => id === FormLinkLabel.LoginLink || id === FormLinkLabel.SignUpLink
  );

  return (
    <BaseForm<ForgotPasswordInitialValues>
      errors={errors}
      formActionButtonsConfig={forgotPasswordFormActionButtonsConfig}
      formInputsConfig={FORGOT_PASSWORD_FORM_INPUTS_CONFIGS}
      formLinksConfig={forgotPasswordFormLinksConfig}
      loader={<Bars color={colors.mantis} height={150} width={150} />}
      register={register}
      title={FormHeaderLabel.ForgotPassword}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onForgotPassword)}
    />
  );
};

export default ForgotPasswordForm;
