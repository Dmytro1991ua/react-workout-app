import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

import Input from '../../components/Input/Input';
import { FormHeaderLabel } from './Auth.enums';
import { FormActinButtonConfig, FormInputConfig, FormLinkConfig } from './Auth.interfaces';
import { FormDetails, FormLink, FormSubmitBtn } from './components/LoginForm/Login.styled';

export const generateFormInputs = <T extends FieldValues>(
  formConfig: FormInputConfig<T>[],
  register: UseFormRegister<T>,
  errors: Partial<DeepMap<T, FieldError>>
): JSX.Element[] =>
  formConfig.map(({ id, name, placeholder, borderColor, type, fullWidth, isRequired }) => (
    <FormDetails key={id}>
      <Input<T>
        type={type}
        id={id}
        register={register}
        errors={errors}
        name={name}
        placeholder={placeholder}
        isRequired={isRequired}
        borderColor={borderColor}
        fullWidth={fullWidth}
      />
    </FormDetails>
  ));

export const generateFromActionButtons = ({
  config,
  onLoginOrSignUpWithCredentials,
  onLoginOrSignUpViaGoogle,
}: {
  config: FormActinButtonConfig[];
  onLoginOrSignUpWithCredentials?: () => void | Promise<void>;
  onLoginOrSignUpViaGoogle?: () => void | Promise<void>;
}): JSX.Element[] => {
  const onClickMap: Record<FormHeaderLabel, (() => void | Promise<void>) | undefined> = {
    [FormHeaderLabel.SignIn]: onLoginOrSignUpWithCredentials,
    [FormHeaderLabel.SignUp]: onLoginOrSignUpWithCredentials,
    [FormHeaderLabel.SignInViaGoogle]: onLoginOrSignUpViaGoogle,
    [FormHeaderLabel.SignUpViaGoogle]: onLoginOrSignUpViaGoogle,
    [FormHeaderLabel.Submit]: undefined,
    [FormHeaderLabel.ResetPassword]: undefined,
    [FormHeaderLabel.ForgotPassword]: undefined,
  };

  return config.map(({ backgroundColor, color, hoverColor, id, label, fullWidth, type }) => {
    const onClickFunction = onClickMap[id as FormHeaderLabel];

    return (
      <FormSubmitBtn
        key={id}
        type={type}
        fullWidth={fullWidth}
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        color={color}
        onClick={onClickFunction}
      >
        {label}
      </FormSubmitBtn>
    );
  });
};

export const generateFormLinks = (config: FormLinkConfig[]): JSX.Element[] =>
  config.map(({ id, label, to }) => (
    <FormLink key={id} to={to}>
      {label}
    </FormLink>
  ));
