import { NextApiRequest, NextApiResponse } from 'next';
import { getGithubJobs } from '../../src/service/GithubAPI';

const githubJobsProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      page, fullTime, location, search,
    } = req.query;
    const response = await getGithubJobs({
      page: Number(returnString(page)),
      fullTime: !!returnString(fullTime),
      location: returnString(location),
      search: returnString(search),
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const returnString = (field: Array<string> | string) => (Array.isArray(field) ? field[0] : field);

export default githubJobsProxy;
