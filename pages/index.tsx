import React, { useState } from 'react';
import Head from 'next/head';
import HomePageTemplate from '../src/components/templates/HomePage';
import { JobModel } from '../src/models/JobModel';

export default function Home() {
  const [jobs, setJobs] = useState<Array<JobModel>>([]);
  return (
    <div>
      <Head>
        <title>DevJobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageTemplate
        jobs={jobs}
        setJobs={setJobs}
      />
    </div>
  );
}
