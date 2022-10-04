import Head from 'next/head';

import { Container, Header, Spheres } from 'components';

import * as s from './page-layout.styles';

export type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  showHeader?: boolean;
};

const PageLayout = ({
  children,
  title,
  showHeader = false
}: PageLayoutProps) => (
  <s.PargeLayoutWrapper>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {showHeader && <Header />}
    <Container>{children}</Container>

    <Spheres />
  </s.PargeLayoutWrapper>
);

export { PageLayout };
