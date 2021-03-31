import { JobResume } from '../../../../models/JobResume';

export interface HeaderProps {
  setJobs: (jobs: Array<JobResume>) => void
}
