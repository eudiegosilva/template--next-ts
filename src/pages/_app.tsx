import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { AuthProvider } from 'contexts';

import { globalStyles } from 'styles';
import { theme } from 'styles/stitches.config';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}
