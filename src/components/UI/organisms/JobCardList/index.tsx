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
  const [page, setPage] = useState(1);
  const [showingButton, setShowingButton] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setShowingButton(false);
      const response = await getGithubJobsProxy({
        page,
      });
      addResponseToState(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setShowingButton(true);
    }
  };

  const addResponseToState = (jobsAPI: Array<GetPositionsAPIResponse>) => {
    const mappedState = mapAPIResponseToState(jobsAPI);
    const stateCopy = [...jobs, ...mappedState];
    setJobs(stateCopy);
    setPage(page + 1);
  };

  const mapAPIResponseToState = (jobsApi: Array<GetPositionsAPIResponse>):
    Array<JobCardProps> => jobsApi.map((job) => ({
    type: job.type,
    company: job.company,
    location: job.location,
    title: job.title,
    postTime: job.created_at.toString(),
  }));

  const renderButton = () => (showingButton ? (
    <div className={styles.ButtonContainer}>
      <Button
        text="Load more"
        variant="primary"
        onClick={fetchJobs}
      />
    </div>
  ) : null);

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
      {renderButton()}
    </div>
  );
};

JobCardList.defaultProps = {
  className: '',
};

export default JobCardList;