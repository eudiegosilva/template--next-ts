import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { globalStyles } from 'styles';
import { theme } from 'styles/stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        value={{
          dark: theme.dark.className,
          light: theme.light.className
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
