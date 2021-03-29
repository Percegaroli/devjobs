import { JobModel } from '../../../../models/JobModel';

export interface JobCardListProps {
  className?: string;
  jobs: Array<JobModel>,
  setJobs: (jobs: Array<JobModel>) => void
}
