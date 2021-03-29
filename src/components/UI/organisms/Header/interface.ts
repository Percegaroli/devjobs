import { JobModel } from '../../../../models/JobModel';

export interface HeaderProps {
  setJobs: (jobs: Array<JobModel>) => void
}
