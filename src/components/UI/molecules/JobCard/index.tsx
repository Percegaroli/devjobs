import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import JobInfo from '../JobInfo';
import { JobCardProps } from './interface';
import styles from './JobCard.module.scss';

const JobCard: React.FC<JobCardProps> = ({
  type, company, location, postTime, title, className,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.Card} ${className} ${styles[theme]}`}>
      <JobInfo
        postTime={postTime}
        type={type}
        company={company}
        location={location}
        title={title}
      />
    </div>
  );
};

JobCard.defaultProps = {
  className: '',
};

export default JobCard;
