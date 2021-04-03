import { JobResume } from '../../../models/JobResume';

export interface HomePageTemplateProps {
  jobs: Array<JobResume>
  setJobs: (jobs: Array<JobResume>) => void
  selectJob: (selectedJobIndex: number) => void
}

export interface SearchParams {
  location: string;
  fullTime: boolean;
  search: string;
}
