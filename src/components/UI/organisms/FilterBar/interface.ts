import { JobModel } from '../../../../models/JobModel';

export interface FilterBarProps {
  className?: string
  setJobs: (jobs: Array<JobModel>) => void
}
