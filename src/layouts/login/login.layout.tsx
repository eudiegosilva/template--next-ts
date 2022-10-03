import { PageLayout } from 'components';
import { Form } from 'components';

import * as s from './login.layout.styles';

const LoginLayout = () => {
  return (
    <PageLayout title="Template NextTS">
      <s.Wrapper>
        <Form.FormLogin onSubmit={() => null} />
      </s.Wrapper>
    </PageLayout>
  );
};

export { LoginLayout };
