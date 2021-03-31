import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from '../../UI/organisms/Header';
import JobCardList from '../../UI/organisms/JobCardList';
import styles from './HomePageTemplate.module.scss';
import { HomePageTemplateProps } from './interface';

const HomePageTemplate = (props: HomePageTemplateProps) => {
  const { jobs, setJobs, selectJob } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.Container} ${styles[theme]}`}>
      <Header
        setJobs={setJobs}
      />
      <JobCardList
        className={styles.JobCardList}
        jobs={jobs}
        setJobs={setJobs}
        selectJob={selectJob}
      />
    </div>
  );
};
export default HomePageTemplate;
