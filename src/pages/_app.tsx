import type { AppProps } from 'next/app';

import { globalStyles } from 'styles';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}
