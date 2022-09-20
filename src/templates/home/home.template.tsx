import { useTheme } from 'next-themes';
import Head from 'next/head';
import { useState } from 'react';

import { Button, Icon } from 'components';

import * as s from './home.template.styles';

const HomeTemplate = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    isDarkTheme ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <Head>
        <title>@diegosilvatech––template–nextjs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <s.Wrapper>
        <s.Section>
          <s.Title>
            diegosilvatech/template--<strong>next-ts</strong>
          </s.Title>
          <Button isFullWidth handleClick={toggleTheme}>
            switch theme
          </Button>
        </s.Section>

        <Icon />
      </s.Wrapper>
    </>
  );
};

export default HomeTemplate;
