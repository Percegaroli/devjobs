import React from 'react';
import JobInfo from '../../molecules/JobInfo';
import { JobCardProps } from './interface';
import styles from './JobCard.module.scss';

const JobCard: React.FC<JobCardProps> = ({
  category, company, location, postTime, title, className,
}) => (
  <div className={`${styles.Card} ${className}`}>
    <JobInfo
      postTime={postTime}
      category={category}
      company={company}
      location={location}
      title={title}
    />
  </div>
);

JobCard.defaultProps = {
  className: '',
};

export default JobCard;
