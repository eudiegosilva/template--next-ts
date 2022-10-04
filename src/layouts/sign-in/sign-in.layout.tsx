import { PageLayout } from 'components';

import * as s from './sign-in.layout.styles';

const SignInLayout = () => {
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
      </s.Wrapper>
    </PageLayout>
  );
};

export { SignInLayout };
