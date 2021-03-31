import { JobResume } from '../../../../models/JobResume';

export interface JobCardListProps {
  className?: string;
  jobs: Array<JobResume>,
  setJobs: (jobs: Array<JobResume>) => void
  selectJob: (selectedJobIndex: number) => void
}
