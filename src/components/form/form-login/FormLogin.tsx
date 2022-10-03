import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Button, Input, Separator } from 'components';
import { loginValidationSchema } from 'validations';

import * as s from './form-login.styles';

export type FormLoginDataProps = {
  email: string;
  password: string;
};
export type FormLoginProps = {
  onSubmit: (formData: FormLoginDataProps) => void;
};

const FormLogin = ({ onSubmit }: FormLoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormLoginDataProps>({
    resolver: yupResolver(loginValidationSchema)
  });

  const _onSubmit: SubmitHandler<FormLoginDataProps> = formData => {
    onSubmit(formData);
  };

  return (
    <s.Wrapper
      aria-label="FormLogin component"
      onSubmit={handleSubmit(_onSubmit)}
    >
      <Input.InputText
        name="email"
        label="Email"
        type="text"
        icon={<EnvelopeClosedIcon />}
        register={register}
      />
      <s.ErrorMessageWrapper>
        {errors.email && (
          <s.ErrorMessage>{errors.email.message}</s.ErrorMessage>
        )}
      </s.ErrorMessageWrapper>
      <Input.InputText
        name="password"
        label="Password"
        type="password"
        icon={<LockClosedIcon />}
        register={register}
      />
      <s.ErrorMessageWrapper>
        {errors.password && (
          <s.ErrorMessage>{errors.password.message}</s.ErrorMessage>
        )}
      </s.ErrorMessageWrapper>

      <Separator margin="$space-05" />

      <Button type="submit" isFullWidth variant="secondary">
        Login
      </Button>
    </s.Wrapper>
  );
};

export { FormLogin };
