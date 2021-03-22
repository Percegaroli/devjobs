import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { JobCardProps } from '../../UI/molecules/JobCard/interface';
import Header from '../../UI/organisms/Header';
import JobCardList from '../../UI/organisms/JobCardList';
import styles from './HomePage.module.scss';

const jobs: Array<JobCardProps> = [{
  category: 'aaaa',
  company: 'aaaa',
  location: 'aaaa',
  postTime: 'aaaa',
  title: 'aaaa',
},
{
  category: 'aaaa',
  company: 'aaaa',
  location: 'aaaa',
  postTime: 'aaaa',
  title: 'aaaa',
},
{
  category: 'aaaa',
  company: 'aaaa',
  location: 'aaaa',
  postTime: 'aaaa',
  title: 'aaaa',
},
{
  category: 'aaaa',
  company: 'aaaa',
  location: 'aaaa',
  postTime: 'aaaa',
  title: 'aaaa',
}];

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.Container} ${styles[theme]}`}>
      <Header />
      <JobCardList
        jobs={jobs}
        className={styles.JobCardList}
      />
    </div>
  );
};
export default HomePage;
