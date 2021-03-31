import { JobModel } from '../models/JobModel';

export interface JobsState {
  jobs: Array<JobModel>,
  setJobs: (jobs: Array<JobModel>) => void
}
