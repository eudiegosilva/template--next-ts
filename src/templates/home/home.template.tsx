import Head from 'next/head';

import { Sphere, Header } from 'components';

import * as s from './home.template.styles';

const HomeTemplate = () => {
  return (
    <s.Container>
      <Head>
        <title>@diegosilvatech––template–nextjs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <s.Wrapper>
        <Header />
        <s.Section>
          <s.Title>
            Awesome template with{' '}
            <s.Strong css={{ color: '$tertiary-11' }}>Next.js</s.Strong>,{' '}
            <s.Strong css={{ color: '$primary-11' }}>Stitches</s.Strong> and{' '}
            <s.Strong css={{ color: '$secondary-11' }}>Radix</s.Strong>
          </s.Title>
          <s.Description>
            See all documentation for a better experience.
          </s.Description>
        </s.Section>
        <Sphere size={320} top={120} left={-120} color="$secondary-03" />
        <Sphere size={420} bottom={120} right={-120} color="$primary-03" />
      </s.Wrapper>
    </s.Container>
  );
};

export default HomeTemplate;
