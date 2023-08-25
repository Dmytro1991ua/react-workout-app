import { FormActionButtonConfig } from '../../App.types';
import { FormHeaderLabel } from './Auth.enums';
import { FormLinkConfig } from './Auth.interfaces';
import { FormLink, FormSubmitBtn } from './components/LoginForm/Login.styled';

export const generateFromActionButtons = ({
  config,
  onLoginOrSignUpWithCredentials,
  onLoginOrSignUpViaGoogle,
}: {
  config: FormActionButtonConfig[];
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
