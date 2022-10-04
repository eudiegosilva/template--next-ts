import { useContext, useEffect } from 'react';

import { PageLayout } from 'components';
import { AuthContext } from 'contexts/auth/auth-context';
// import { api } from 'services';

import * as s from './dashboard.layout.styles';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  console.log({ user });

  useEffect(() => {
    // api.get('/users');
  }, []);

  return (
    <PageLayout title="Dashboard — Template NextTS" showHeader>
      <s.Wrapper>
        <h1>Dashboard</h1>

        <img src={user?.avatarUrl} width={100} />
      </s.Wrapper>
    </PageLayout>
  );
};

export { DashboardLayout };
