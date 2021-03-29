import { JobModel } from '../../../models/JobModel';

export interface HomePageTemplateProps {
  jobs: Array<JobModel>
  setJobs: (jobs: Array<JobModel>) => void
}
