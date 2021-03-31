import Axios from 'axios';
import { GetPositionsAPIResponse } from './contracts';
import { GetGithubJobListConfig } from './interface';

export const getGithubJobs = (config?: GetGithubJobListConfig) => {
  const parameters = mapGetGithubJobsParams(config);
  return Axios.get<Array<GetPositionsAPIResponse>>(`https://jobs.github.com/positions.json${parameters}`);
};

export const getGithubJobsProxy = (config?: GetGithubJobListConfig) => {
  const parameters = mapGetGithubJobsParams(config);
  return Axios.get<Array<GetPositionsAPIResponse>>(`/api/githubJobs${parameters}`);
};

const mapGetGithubJobsParams = (config?: GetGithubJobListConfig) => {
  let parameters = `?page=${(config && config.page) ?? 0}`;
  if (config) {
    const {
      fullTime, location, search,
    } = config;
    if (fullTime) parameters += '&full_time=true';
    if (location) parameters += `&location=${location}`;
    if (search) parameters += `&search=${search}`;
  }
  return parameters;
};

export const getGithubJobDetailsProxy = (jobId: string) => Axios.get<GetPositionsAPIResponse>(`/api/jobDetails/${jobId}`);

export const getGithubJobDetails = (jobId: string) => {
  const url = `https://jobs.github.com/positions/${jobId}.json`;
  return Axios.get<GetPositionsAPIResponse>(url);
};

export default {};
