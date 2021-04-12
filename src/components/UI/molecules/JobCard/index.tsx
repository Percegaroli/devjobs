import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import Card from '../../atoms/Card';
import ExternalImage from '../../atoms/ExternalImage';
import JobInfo from '../JobInfo';
import { JobCardProps } from './interface';
import styles from './JobCard.module.scss';

const JobCard: React.FC<JobCardProps> = ({
  type, company, location, postTime, title, className, logoUrl, onClick,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      className={`${styles.Card} ${styles.JobCard} ${className} ${styles[theme]}`}
      onClick={onClick}
    >
      <JobInfo
        postTime={postTime}
        type={type}
        company={company}
        location={location}
        title={title}
      />
    </Card>
  );
};

JobCard.defaultProps = {
  className: '',
};

export default JobCard;
