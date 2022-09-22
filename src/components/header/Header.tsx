import { useTheme } from 'next-themes';
import { useState } from 'react';

import { Switch } from 'components';

import * as s from './header.styles';

export type HeaderProps = any;

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    isDarkTheme ? setTheme('light') : setTheme('dark');
  };

  return (
    <s.Header>
      <s.HeaderContainer>
        <Switch
          label="light mode"
          id="light-mode"
          onCheckedChange={toggleTheme}
        />
      </s.HeaderContainer>
    </s.Header>
  );
};

export { Header };
