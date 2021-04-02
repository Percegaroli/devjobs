import { useRouter } from 'next/dist/client/router';
import React, { useContext, useState, useEffect } from 'react';
import { JobResume } from '../../../../models/JobResume';
import { getGithubJobsProxy } from '../../../../service/GithubAPI';
import { GetPositionsAPIResponse } from '../../../../service/GithubAPI/contracts';
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import JobCard from '../../molecules/JobCard';
import { JobCardListProps } from './interface';
import styles from './JobCardList.module.scss';

const JobCardList: React.FC<JobCardListProps> = ({
  className, jobs, setJobs, selectJob,
}) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [showingButton, setShowingButton] = useState(jobs.length > 0);

  useEffect(() => {
    if (!jobs.length) {
      fetchJobs();
    }
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

  const onJobClick = (index: number, id: string) => {
    selectJob(index);
    router.push(`/jobs/details/${id}`);
  };

  const addResponseToState = (jobsAPI: Array<GetPositionsAPIResponse>) => {
    const mappedState = mapAPIResponseToState(jobsAPI);
    const stateCopy = [...jobs, ...mappedState];
    setJobs(stateCopy);
    setPage(page + 1);
  };

  const mapAPIResponseToState = (jobsApi: Array<GetPositionsAPIResponse>):
    Array<JobResume> => jobsApi.map((job) => ({
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
    <Container className={`${styles.Container} ${className}`}>
      <div className={`${styles.ListContainer}`}>
        {jobs.map((job, index) => (
          <JobCard
            onClick={() => onJobClick(index, job.id)}
            id={job.id}
            type={job.type}
            company={job.company}
            location={job.location}
            postTime={job.postTime}
            title={job.title}
            key={job.id}
            logoUrl={job.logoUrl}
            className={styles.JobCard}
          />
        ))}
      </div>
      {renderButton()}
    </Container>
  );
};

JobCardList.defaultProps = {
  className: '',
};

export default JobCardList;
