import React, { useContext, useState } from 'react';
import { JobModel } from '../models/JobModel';
import { JobStateContext } from './StateContext';

const JobStateProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<Array<JobModel>>([]);
  const aa = useContext(JobStateContext);

  return (
    <JobStateContext.Provider value={{
      jobs,
      setJobs,
    }}
    >
      {children}
    </JobStateContext.Provider>
  );
};

export default JobStateProvider;
