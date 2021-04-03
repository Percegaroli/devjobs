import { useRouter } from 'next/dist/client/router';
import React, { useState, useEffect } from 'react';
import { getGithubJobsProxy } from '../../../../service/GithubAPI';
import { GetPositionsAPIResponse } from '../../../../service/GithubAPI/contracts';
import { mapAPIResponseToState } from '../../../../util/dataMapping/jobInfo';
import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import JobCard from '../../molecules/JobCard';
import { JobCardListProps } from './interface';
import styles from './JobCardList.module.scss';

const JobCardList: React.FC<JobCardListProps> = ({
  className, jobs, setJobs, selectJob, filterParams, page, incrementPage,
}) => {
  const router = useRouter();
  const [showingButton, setShowingButton] = useState(jobs.length > 0);

  useEffect(() => {
    if (!jobs.length) {
      fetchJobs();
    }
  }, []);

  const fetchJobs = async () => {
    try {
      const { fullTime, location, search } = filterParams;
      setShowingButton(false);
      const response = await getGithubJobsProxy({
        page,
        fullTime,
        location,
        search,
      });
      addResponseToState(response.data);
      incrementPage();
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
  };

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
