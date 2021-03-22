import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/tokens.scss';
import ThemeProvider from '../src/components/context/ThemeContext/Provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
