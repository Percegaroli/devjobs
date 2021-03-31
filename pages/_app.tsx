import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import '../styles/tokens.scss';
import ThemeProvider from '../src/components/context/ThemeContext/Provider';
import JobStateProvider from '../src/state/StateProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <JobStateProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </JobStateProvider>
  );
}

export default MyApp;
