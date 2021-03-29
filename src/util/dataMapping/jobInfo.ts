import { JobModel } from '../../models/JobModel';
import { GetPositionsAPIResponse } from '../../service/GithubAPI/contracts';

export const mapAPIResponseToState = (jobsApi: Array<GetPositionsAPIResponse>):
Array<JobModel> => jobsApi.map((job) => ({
  id: job.id,
  type: job.type,
  company: job.company,
  location: job.location,
  title: job.title,
  postTime: job.created_at.toString(),
  logoUrl: job.company_logo,
}));

export default {};
