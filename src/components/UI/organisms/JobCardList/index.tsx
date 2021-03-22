import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../../atoms/Button';
import JobCard from '../../molecules/JobCard';
import { JobCardListProps } from './interface';
import styles from './JobCardList.module.scss';

const JobCardList: React.FC<JobCardListProps> = ({ jobs, className }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.Container} ${styles[theme]} ${className}`}>
      <div className={`${styles.ListContainer}`}>
        {jobs.map((job) => (
          <JobCard
            category={job.category}
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
