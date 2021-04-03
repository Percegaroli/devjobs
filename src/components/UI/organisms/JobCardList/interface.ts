import { JobResume } from '../../../../models/JobResume';

export interface JobCardListProps {
  className?: string;
  jobs: Array<JobResume>,
  setJobs: (jobs: Array<JobResume>) => void
  selectJob: (selectedJobIndex: number) => void
  filterParams: FilterParams,
  incrementPage: () => void
  page: number
}

interface FilterParams {
  location: string;
  fullTime: boolean;
  search: string;
}
