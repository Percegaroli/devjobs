import React, { useState } from 'react';
import { JobResume } from '../models/JobResume';
import { JobStateContext } from './StateContext';

const JobStateProvider: React.FC = ({ children }) => {
  const [jobs, setJobs] = useState<Array<JobResume>>([]);
  const [selectedJobIndex, setSelectedJobIndex] = useState(-1);

  return (
    <JobStateContext.Provider value={{
      jobs,
      setJobs,
      selectedJobIndex,
      setSelectedJobIndex,
    }}
    >
      {children}
    </JobStateContext.Provider>
  );
};

export default JobStateProvider;
