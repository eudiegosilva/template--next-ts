import { PageLayout } from 'components';

import * as s from './sign-in.layout.styles';

const SignInLayout = () => {
  return (
    <PageLayout title="Sign In — Template NextTS">
      <s.Wrapper>
        <h1>Sign In</h1>
        <s.Form>
          <s.Input type="email" placeholder="your@email.com" />
          <s.Input type="password" placeholder="your password" />
        </s.Form>
      </s.Wrapper>
    </PageLayout>
  );
};

export { SignInLayout };
