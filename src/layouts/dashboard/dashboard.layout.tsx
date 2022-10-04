import { PageLayout } from 'components';

import * as s from './dashboard.layout.styles';

const DashboardLayout = () => {
  return (
    <PageLayout title="Dashboard — Template NextTS" showHeader>
      <s.Wrapper>
        <h1>Dashboard</h1>
      </s.Wrapper>
    </PageLayout>
  );
};

export { DashboardLayout };
