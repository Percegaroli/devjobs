import React, { useContext } from 'react';
import Head from 'next/head';
import HomePageTemplate from '../src/components/templates/HomePage';
import { JobStateContext } from '../src/state/StateContext';

export default function Home() {
  const { jobs, setJobs, setSelectedJobIndex } = useContext(JobStateContext);

  return (
    <div>
      <Head>
        <title>DevJobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageTemplate
        jobs={jobs}
        setJobs={setJobs}
        selectJob={setSelectedJobIndex}
      />
    </div>
  );
}
