import React, { ReactElement } from 'react';
import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import { FormHeaderLabel } from '../../Auth.enums';
import { FormActinButtonConfig, FormInputConfig, FormLinkConfig } from '../../Auth.interfaces';
import { generateFormInputs, generateFormLinks, generateFromActionButtons } from '../../Auth.utils';
import { Form, FormBody, FormSection, FormSectionTitle } from '../LoginForm/Login.styled';

interface BaseFormProps<T extends FieldValues> {
  isSubmitting?: boolean;
  isSignInViaGoogleLoading?: boolean;
  loader: JSX.Element;
  title: FormHeaderLabel;
  formInputsConfig: FormInputConfig<T>[];
  formActionButtonsConfig: FormActinButtonConfig[];
  formLinksConfig: FormLinkConfig[];
  register: UseFormRegister<T>;
  errors: Partial<DeepMap<T, FieldError>>;
  onSubmit?: () => void | Promise<void>;
  onLoginOrSignUpWithCredentials?: () => void | Promise<void>;
  onLoginOrSignUpViaGoogle?: () => void | Promise<void>;
}

const BaseForm = <T extends FieldValues>({
  formInputsConfig,
  formActionButtonsConfig,
  formLinksConfig,
  isSignInViaGoogleLoading,
  isSubmitting,
  loader,
  errors,
  register,
  title,
  onLoginOrSignUpWithCredentials,
  onLoginOrSignUpViaGoogle,
  onSubmit,
}: BaseFormProps<T>): ReactElement => {
  const formInputs = generateFormInputs<T>(formInputsConfig, register, errors);

  const formActionButtons = generateFromActionButtons({
    config: formActionButtonsConfig,
    onLoginOrSignUpWithCredentials,
    onLoginOrSignUpViaGoogle,
  });

  const formLinks = generateFormLinks(formLinksConfig);

  return (
    <FormSection>
      {isSubmitting || isSignInViaGoogleLoading ? (
        loader
      ) : (
        <>
          <FormSectionTitle>{title}</FormSectionTitle>
          <Form onSubmit={onSubmit}>
            <FormBody>
              {formInputs}
              {formActionButtons}
              {formLinks}
            </FormBody>
          </Form>
        </>
      )}
    </FormSection>
  );
};

export default BaseForm;
