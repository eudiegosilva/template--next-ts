import { signIn } from 'next-auth/react';
import { useState, FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { PageLayout, Button, Input, Separator } from 'components';
import { loginValidationSchema } from 'validations';

import * as s from './sign-in.layout.styles';

export type UserCredentialsProps = {
  email: string;
  password: string;
};

const SignInLayout = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentialsProps>({
    email: '',
    password: ''
  });

  const {
    register,
    formState: { errors }
  } = useForm<UserCredentialsProps>({
    resolver: yupResolver(loginValidationSchema)
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async event => {
    // validade your user credentials
    event.preventDefault();
    const response = await signIn('credentials', {
      email: userCredentials.email,
      password: userCredentials.password,
      redirect: false
    });

    console.log(response);
    console.log({ errors });
  };

  return (
    <PageLayout title="Sign In — Template NextTS">
      <s.Wrapper>
        <h1>Sign In</h1>
        <s.Form onSubmit={onSubmit}>
          <Input.InputText
            name="email"
            label="Email"
            value={userCredentials.email}
            type="email"
            icon={<EnvelopeClosedIcon />}
            placeholder="your@email.com"
            onChange={({ target }) =>
              setUserCredentials({ ...userCredentials, email: target.value })
            }
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
            value={userCredentials.password}
            type="password"
            placeholder="your password"
            icon={<LockClosedIcon />}
            onChange={({ target }) =>
              setUserCredentials({ ...userCredentials, password: target.value })
            }
            register={register}
          />
          <s.ErrorMessageWrapper>
            {errors.password && (
              <s.ErrorMessage>{errors.password.message}</s.ErrorMessage>
            )}
          </s.ErrorMessageWrapper>

          <Separator margin="$space-05" />

          <Button type="submit" isFullWidth variant="secondary">
            SignIn
          </Button>
        </s.Form>
      </s.Wrapper>
    </PageLayout>
  );
};

export { SignInLayout };
