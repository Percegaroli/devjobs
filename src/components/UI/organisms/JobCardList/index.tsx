import React, { useContext, useState, useEffect } from 'react';
import { getGithubJobsProxy } from '../../../../service/GithubAPI';
import { GetPositionsAPIResponse } from '../../../../service/GithubAPI/contracts';
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../../atoms/Button';
import JobCard from '../../molecules/JobCard';
import { JobCardProps } from '../../molecules/JobCard/interface';
import { JobCardListProps } from './interface';
import styles from './JobCardList.module.scss';

const JobCardList: React.FC<JobCardListProps> = ({ className }) => {
  const { theme } = useContext(ThemeContext);
  const [jobs, setJobs] = useState<Array<JobCardProps>>([]);

  const addResponseToState = (jobsAPI: Array<GetPositionsAPIResponse>) => {
    const mappedState = mapAPIResponseToState(jobsAPI);
    setJobs(mappedState);
  };

  const mapAPIResponseToState = (jobsApi: Array<GetPositionsAPIResponse>):
    Array<JobCardProps> => jobsApi.map((job) => ({
    type: job.type,
    company: job.company,
    location: job.location,
    title: job.title,
    postTime: job.created_at.toString(),
  }));

  const fetchJobs = async () => {
    try {
      const response = await getGithubJobsProxy();
      console.log(response.data);
      addResponseToState(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className={`${styles.Container} ${styles[theme]} ${className}`}>
      <div className={`${styles.ListContainer}`}>
        {jobs.map((job) => (
          <JobCard
            type={job.type}
            company={job.company}
            location={job.location}
            postTime={job.postTime}
            title={job.title}
            key={`${job.title}-${job.company}`}
          />
        ))}
      </div>
      <div className={styles.ButtonContainer}>
        <Button text="Load more" variant="primary" />
      </div>
    </div>
  );
};

JobCardList.defaultProps = {
  className: '',
};

export default JobCardList;
