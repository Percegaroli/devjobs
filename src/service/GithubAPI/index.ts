import Axios from 'axios';
import { GetPositionsAPIResponse } from './contracts';
import { GetGithubJobListConfig } from './interface';

export const getGithubJobs = (config?: GetGithubJobListConfig) => {
  let parametros = `?page=${(config && config.page) ?? 0}`;
  if (config) {
    const {
      fullTime, location, search,
    } = config;
    if (fullTime) parametros += '&full_time=true';
    if (location) parametros += `&location=${location}`;
    if (search) parametros += `&search=${search}`;
  }
  return Axios.get<Array<GetPositionsAPIResponse>>(`https://jobs.github.com/positions.json${parametros}`);
};

export const getGithubJobsProxy = (config?: GetGithubJobListConfig) => Axios.get<Array<GetPositionsAPIResponse>>('/api/githubJobs');

export default {};
