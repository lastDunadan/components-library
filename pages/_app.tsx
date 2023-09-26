import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { GlobalStyle, ThemeProvider } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => (
  <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default MyApp;
