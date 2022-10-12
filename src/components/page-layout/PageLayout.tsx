import Head from 'next/head';

import { Container, Header, Spheres } from 'components';

import * as s from './page-layout.styles';

export type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  showHeader?: boolean;
  hideNavigation?: boolean;
};

const PageLayout = ({
  children,
  title,
  showHeader = false,
  hideNavigation = false,
}: PageLayoutProps) => (
  <s.PargeLayoutWrapper>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {showHeader && <Header hideNavigation={hideNavigation} />}
    <Container>{children}</Container>

    <Spheres />
  </s.PargeLayoutWrapper>
);

export { PageLayout };
