import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Toggle, Logo } from 'components';

import * as s from './header.styles';

export type HeaderProps = {};
export type LinkItemProps = {
  page: string;
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

  const pages: string[] = ['Home', 'About'];
  const router = useRouter();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    isDarkTheme ? setTheme('light') : setTheme('dark');
  };

  const ThemeIcon = () => (theme === 'light' ? <MoonIcon /> : <SunIcon />);

  const LinkItem = ({ page }: LinkItemProps) => {
    const path = `/${page.toLocaleLowerCase()}`;
    const variant = router.pathname === path ? 'active' : 'inactive';
    return (
      <s.ListItem key={page}>
        <Link href={path} passHref>
          <s.LinkItem variant={variant}>{page}</s.LinkItem>
        </Link>
      </s.ListItem>
    );
  };

  return (
    <s.Header>
      <s.HeaderContainer>
        <s.LogoWrapper onClick={() => router.push('/')}>
          <Logo size={35} color="$primary-09" />
        </s.LogoWrapper>
        <s.List>
          {pages.map(page => (
            <LinkItem key={page} page={page} />
          ))}
        </s.List>
        <Toggle onClick={toggleTheme}>
          <ThemeIcon />
        </Toggle>
      </s.HeaderContainer>
    </s.Header>
  );
};

export { Header };
