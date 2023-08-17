import React, { ReactElement } from 'react';
import { Circles } from 'react-loader-spinner';

import { colors } from '../../../../global-styles/ColorsPalette';
import { FORM_ACTION_BUTTONS_CONFIG, RESET_PASSWORD_FORM_INPUTS_CONFIGS } from '../../Auh.config';
import { FormHeaderLabel } from '../../Auth.enums';
import { ResetPasswordInitialValues } from '../../Auth.interfaces';
import { RESET_PASSWORD_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { useAuth } from '../../hooks/useAuth';
import BaseForm from '../BaseForm/BaseForm';

const ResetPasswordForm = (): ReactElement => {
  const { errors, register, isSubmitting, onResetPassword, handleSubmit } = useAuth<ResetPasswordInitialValues>({
    validationSchema: RESET_PASSWORD_VALIDATION_SCHEMA,
  });

  const resetPasswordFormActionButtonsConfig = FORM_ACTION_BUTTONS_CONFIG.filter(
    (config) => config.id === FormHeaderLabel.ResetPassword
  );

  return (
    <BaseForm<ResetPasswordInitialValues>
      errors={errors}
      formActionButtonsConfig={resetPasswordFormActionButtonsConfig}
      formInputsConfig={RESET_PASSWORD_FORM_INPUTS_CONFIGS}
      formLinksConfig={[]}
      loader={<Circles color={colors.mantis} height={150} width={150} />}
      register={register}
      title={FormHeaderLabel.ResetPassword}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onResetPassword)}
    />
  );
};

export default ResetPasswordForm;
