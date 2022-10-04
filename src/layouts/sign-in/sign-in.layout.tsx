import { signIn } from 'next-auth/react';
import { useState, FormEventHandler } from 'react';

import { PageLayout, Button } from 'components';

import * as s from './sign-in.layout.styles';

const SignInLayout = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    // validade your user credentials
    event.preventDefault();
    const response = await signIn('credentials', {
      email: userCredentials.email,
      password: userCredentials.password
    });

    console.log(response);
  };
  return (
    <PageLayout title="Sign In — Template NextTS">
      <s.Wrapper>
        <h1>Sign In</h1>
        <s.Form onSubmit={handleSubmit}>
          <s.Input
            value={userCredentials.email}
            type="email"
            placeholder="your@email.com"
            onChange={({ target }) =>
              setUserCredentials({ ...userCredentials, email: target.value })
            }
          />
          <s.Input
            value={userCredentials.password}
            type="password"
            placeholder="your password"
            onChange={({ target }) =>
              setUserCredentials({ ...userCredentials, password: target.value })
            }
          />
          <Button type="submit">SignIn</Button>
        </s.Form>
      </s.Wrapper>
    </PageLayout>
  );
};

export { SignInLayout };
