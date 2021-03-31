import { JobResume } from '../models/JobResume';

export interface JobsState {
  jobs: Array<JobResume>,
  setJobs: (jobs: Array<JobResume>) => void
  selectedJobIndex: number
  setSelectedJobIndex: (selectedJobIndex: number) => void
}
