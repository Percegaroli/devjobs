import { JobResume } from '../../../../models/JobResume';

export interface FilterBarProps {
  className?: string
  setJobs: (jobs: Array<JobResume>) => void
}
