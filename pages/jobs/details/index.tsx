import React from 'react';
import Head from 'next/head';
import JobDetailsTemplate from '../../../src/components/templates/JobDetails';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DevJobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JobDetailsTemplate />
    </div>
  );
}
