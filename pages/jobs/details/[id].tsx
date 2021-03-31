import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import JobDetailsTemplate from '../../../src/components/templates/JobDetails';
import { getGithubJobDetailsProxy } from '../../../src/service/GithubAPI';
import { JobDetails } from '../../../src/models/JobDetails';
import { mapAPIResponseTODetailedState } from '../../../src/util/dataMapping/jobInfo';

const initialJobDetailsState: JobDetails = {
  companyName: '',
  companyUrl: '',
  description: '',
  howToApply: '',
  id: '',
  jobTitle: '',
  jobUrl: '',
  location: '',
  logoUrl: '',
  postDate: new Date(),
  type: '',
};

export default function JobDetailsPage() {
  const [jobDetails, setJobDetails] = useState<JobDetails>(initialJobDetailsState);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fecthJob();
  }, [id]);

  const fecthJob = async () => {
    if (id) {
      const response = await getGithubJobDetailsProxy(Array.isArray(id) ? id[0] : id);
      const mappedState = mapAPIResponseTODetailedState(response.data);
      setJobDetails(mappedState);
    }
  };

  return (
    <div>
      <Head>
        <title>DevJobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <JobDetailsTemplate jobSelected={jobDetails} />
    </div>
  );
}
