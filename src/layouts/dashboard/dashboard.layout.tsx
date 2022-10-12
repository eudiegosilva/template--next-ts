import { useContext } from 'react';

import { PageLayout, DashboardArea } from 'components';
import { AuthContext } from 'contexts/auth/auth-context';

import * as s from './dashboard.layout.styles';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <PageLayout title="Dashboard — Template NextTS" showHeader>
      <s.Wrapper>
        <h2>{user?.name}</h2>

        <DashboardArea />
      </s.Wrapper>
    </PageLayout>
  );
};

export { DashboardLayout };
