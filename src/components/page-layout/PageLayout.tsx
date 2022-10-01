import Head from 'next/head';

import { Container, Header, Spheres } from 'components';

import * as s from './page-layout.styles';

export type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
};

const PageLayout = ({ children, title }: PageLayoutProps) => (
  <s.PargeLayoutWrapper>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Container>{children}</Container>

    <Spheres />
  </s.PargeLayoutWrapper>
);

export { PageLayout };
