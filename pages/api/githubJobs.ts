import { NextApiRequest, NextApiResponse } from 'next';
import { getGithubJobs } from '../../src/service/GithubAPI';

const githubJobsProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { page } = req.query;
    const response = await getGithubJobs({
      page: Array.isArray(page) ? Number(page[0]) : Number(page),
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default githubJobsProxy;
