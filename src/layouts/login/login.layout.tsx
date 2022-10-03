import { useContext } from 'react';

import { PageLayout } from 'components';
import { Form } from 'components';
import { AuthContext } from 'contexts';
import { FormLoginDataProps } from 'types';

import * as s from './login.layout.styles';

const LoginLayout = () => {
  const { login } = useContext(AuthContext);

  const onSubmitLogin = (formData: FormLoginDataProps) => {
    const { email, password } = formData;
    login(email, password);
  };

  return (
    <PageLayout title="Template NextTS">
      <s.Wrapper>
        <Form.FormLogin onSubmit={onSubmitLogin} />
      </s.Wrapper>
    </PageLayout>
  );
};

export { LoginLayout };
