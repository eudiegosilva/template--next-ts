import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { PageLayout, Input, Button } from 'components';
import { AuthContext } from 'contexts/auth/auth-context';

import * as s from './sign-in.layout.styles';

type FormDataProps = {
  email: string;
  password: string;
};

const SignInLayout = () => {
  const { register, handleSubmit } = useForm<FormDataProps>();
  const { signIn, user } = useContext(AuthContext);

  const handleSignIn = async (data: FormDataProps) => {
    await signIn(data);
  };

  return (
    <PageLayout title="SignIn — Template NextTS">
      <s.Wrapper>
        <s.Section>
          <s.Title>
            Template {''}
            <s.Strong css={{ color: '$primary-11' }}>Next</s.Strong>
            <s.Strong css={{ color: '$secondary-11' }}>TS</s.Strong>
          </s.Title>
          <s.Description>
            Made with NextJS, TypeScript, Stitches and Radix.
          </s.Description>
        </s.Section>

        <s.Form onSubmit={handleSubmit(handleSignIn)}>
          <Input.InputText
            name="email"
            label="Email"
            type="email"
            icon={<EnvelopeClosedIcon />}
            placeholder="your@email.com"
            register={register}
          />

          <Input.InputText
            name="password"
            label="Password"
            type="password"
            placeholder="password"
            icon={<LockClosedIcon />}
            register={register}
          />

          <Button type="submit" isFullWidth>
            SignIn
          </Button>
        </s.Form>
      </s.Wrapper>
    </PageLayout>
  );
};

export { SignInLayout };
