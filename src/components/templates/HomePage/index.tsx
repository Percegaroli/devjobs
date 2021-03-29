import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Header from '../../UI/organisms/Header';
import JobCardList from '../../UI/organisms/JobCardList';
import styles from './HomePageTemplate.module.scss';
import { HomePageTemplateProps } from './interface';

const HomePageTemplate = (props: HomePageTemplateProps) => {
  const { jobs, setJobs } = props;
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
      />
    </div>
  );
};
export default HomePageTemplate;
