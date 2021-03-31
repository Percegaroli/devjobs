import { NextApiRequest, NextApiResponse } from 'next';
import { getGithubJobDetails } from '../../../src/service/GithubAPI';

const jobDetailsProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const response = await getGithubJobDetails(Array.isArray(id) ? id[0] : id);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default jobDetailsProxy;
