import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Bars } from 'react-loader-spinner';

import { AppRoutes } from '../../../../App.enums';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { colors } from '../../../../global-styles/ColorsPalette';
import { ForgotPasswordInitialValues } from '../../Auth.interfaces';
import { authService } from '../../Auth.service';
import { FORGOT_PASSWORD_VALIDATION_SCHEMA } from '../../AuthValidations.schema';
import { Form, FormBody, FormDetails, FormLink, FormSection, FormSectionTitle } from '../LoginForm/Login.styled';

const ForgotPassword = (): ReactElement => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ForgotPasswordInitialValues>({
    mode: 'onBlur',
    resolver: yupResolver(FORGOT_PASSWORD_VALIDATION_SCHEMA),
  });

  async function handleForgotPasswordFormSubmit(formData: ForgotPasswordInitialValues): Promise<void> {
    const { email } = formData;

    await authService.forgotPassword(email);

    reset();
  }

  return (
    <FormSection>
      {isSubmitting ? (
        <Bars color={colors.mantis} height={150} width={150} />
      ) : (
        <>
          <FormSectionTitle>Password Reset</FormSectionTitle>
          <Form onSubmit={handleSubmit(handleForgotPasswordFormSubmit)}>
            <FormBody>
              <FormDetails>
                <Input<ForgotPasswordInitialValues>
                  type='email'
                  id='email'
                  register={register}
                  errors={errors}
                  name='email'
                  placeholder='Email*'
                  isRequired
                  borderColor='mantis'
                  fullWidth
                />
              </FormDetails>
              <Button type='submit' fullWidth backgroundColor='mantis' hoverColor='mantisDarker' color='white'>
                Submit
              </Button>
              <FormLink to={{ pathname: AppRoutes.Login }}>Log In</FormLink>
              <FormLink to={{ pathname: AppRoutes.SignUp }}>Don&apos;t have an account?</FormLink>
            </FormBody>
          </Form>
        </>
      )}
    </FormSection>
  );
};

export default ForgotPassword;
