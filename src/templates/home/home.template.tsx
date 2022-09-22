import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useState } from 'react';

import { Button, Sphere } from 'components';

import * as s from './home.template.styles';

const HomeTemplate = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    isDarkTheme ? setTheme('light') : setTheme('dark');
  };

  return (
    <s.Container>
      <Head>
        <title>@diegosilvatech––template–nextjs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <s.Wrapper>
        <s.Section>
          <s.Title>
            Awesome template with Next.js,{' '}
            <s.Strong css={{ color: '$primary-11' }}>Stitches</s.Strong> and{' '}
            <s.Strong css={{ color: '$secondary-11' }}>Radix</s.Strong>
          </s.Title>
          <s.Description>
            See all documentation for a better experience.
          </s.Description>
          <Button isFullWidth handleClick={toggleTheme}>
            switch theme
          </Button>
        </s.Section>
        <Sphere size={320} top={120} left={-120} color="$secondary-03" />
        <Sphere size={420} bottom={120} right={-120} color="$primary-03" />
      </s.Wrapper>
    </s.Container>
  );
};

export default HomeTemplate;
