import React from 'react';
import Head from 'next/head';
import HomePage from '../src/components/templates/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevJobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
