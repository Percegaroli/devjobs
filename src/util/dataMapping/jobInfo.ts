import { JobDetails } from '../../models/JobDetails';
import { JobResume } from '../../models/JobResume';
import { GetPositionsAPIResponse } from '../../service/GithubAPI/contracts';

export const mapAPIResponseToState = (jobsApi: Array<GetPositionsAPIResponse>):
Array<JobResume> => jobsApi.map((job) => ({
  id: job.id,
  type: job.type,
  company: job.company,
  location: job.location,
  title: job.title,
  postTime: job.created_at.toString(),
  logoUrl: job.company_logo,
}));

export const mapAPIResponseTODetailedState = (
  apiResponse: GetPositionsAPIResponse,
): JobDetails => ({
  companyName: apiResponse.company,
  companyUrl: apiResponse.company_url,
  description: apiResponse.description,
  howToApply: apiResponse.how_to_apply,
  id: apiResponse.id,
  jobTitle: apiResponse.title,
  type: apiResponse.type,
  jobUrl: apiResponse.url,
  location: apiResponse.location,
  logoUrl: apiResponse.company_logo,
  postDate: apiResponse.created_at,
});

export default {};
