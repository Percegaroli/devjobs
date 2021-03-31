import { createContext } from 'react';
import { JobsState } from './interface';

export const initialJobsState: JobsState = {
  jobs: [],
  setJobs: () => {},
  selectedJobIndex: -1,
  setSelectedJobIndex: () => {},
};

export const JobStateContext = createContext<JobsState>(initialJobsState);

export default {};
