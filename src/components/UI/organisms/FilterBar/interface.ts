import { JobResume } from '../../../../models/JobResume';
import { SearchParams } from '../../../templates/HomePage/interface';

export interface FilterBarProps {
  className?: string
  setJobs: (jobs: Array<JobResume>) => void
  setSearchParams: (searchParams: SearchParams) => void
}
