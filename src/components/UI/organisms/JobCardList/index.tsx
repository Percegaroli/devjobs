import { useRouter } from 'next/dist/client/router';
import React, { useContext, useState, useEffect } from 'react';
import { JobModel } from '../../../../models/JobModel';
import { getGithubJobsProxy } from '../../../../service/GithubAPI';
import { GetPositionsAPIResponse } from '../../../../service/GithubAPI/contracts';
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../../atoms/Button';
import JobCard from '../../molecules/JobCard';
import { JobCardListProps } from './interface';
import styles from './JobCardList.module.scss';

const JobCardList: React.FC<JobCardListProps> = ({ className, jobs, setJobs }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
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

  const onJobClick = () => {
    router.push('/jobs/details');
  };

  const addResponseToState = (jobsAPI: Array<GetPositionsAPIResponse>) => {
    const mappedState = mapAPIResponseToState(jobsAPI);
    const stateCopy = [...jobs, ...mappedState];
    setJobs(stateCopy);
    setPage(page + 1);
  };

  const mapAPIResponseToState = (jobsApi: Array<GetPositionsAPIResponse>):
    Array<JobModel> => jobsApi.map((job) => ({
    id: job.id,
    type: job.type,
    company: job.company,
    location: job.location,
    title: job.title,
    postTime: job.created_at.toString(),
    logoUrl: job.company_logo,
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
            onClick={onJobClick}
            id={job.id}
            type={job.type}
            company={job.company}
            location={job.location}
            postTime={job.postTime}
            title={job.title}
            key={job.id}
            logoUrl={job.logoUrl}
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
